'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-11-06T17:01:17.194Z',
    '2021-11-09T23:36:17.929Z',
    '2021-11-11T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

// Experimenting API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',// 2-digit to get 01, 02, 03 ... 09, long is for full name
  year: 'numeric',
  weekday: 'long'
}

const locale = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

const formatMovementDate = function(date, locale) {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDaysPassed(new Date(), date);

  if(dayPassed === 0) return 'Today';
  if(dayPassed === 1) return 'Yesterday';
  if(dayPassed <= 7) return `${dayPassed} days ago`;
  // else {
  //   const now = new Date();
  //   // const day = `${date.getDate()}`.padStart(2, 0);
  //   // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   // const year = date.getFullYear();
  //   // return `${day}/${month}/${year}`;
  // }
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const dosplayDate = formatMovementDate(date, acc.locale);

    const formatedCur = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${formatMovementDate(date)}</div>
        <div class="movements__value">${formatedCur}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function(){
  const tick = function(){
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    // In each call print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds stop timer and log out user
    if(time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5min
  let time = 300;

  tick();

  // Call the timer every second
  const timer = setInterval(tick, 1000);

  return timer;

};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// // FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Current date
    const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',// 2-digit to get 01, 02, 03 ... 09, long is for full name
      year: 'numeric',
      weekday: 'long'
    }
    
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if(timer) clearInterval(timer);

    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
   setTimeout(function() {
       // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

      // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
   }, 5000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
      +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// 1 Converting and Checking Numbers

// console.log(23 === 23.0); // true

// // Base 10 numbers are numbers from 0 to 9
// // Binary base 2 are 0 and 1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // Convert string to number
// console.log(Number('23'));
// console.log(+'23');

// // PArsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));

// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseInt('2.5rem'));

// // Check if value is NaN
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN('20')); // false
// console.log(Number.isNaN(+'20X')); // true
// console.log(Number.isNaN(23 / 0)); // false

// // Check if value is number
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite('20')); // false
// console.log(Number.isFinite(+'20X')); // false
// console.log(Number.isFinite(23 / 0)); // false

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

// // 2 Math and Rounding

// // Square root
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// // Cubic root
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 8, 23, 11, 2)); // 23
// console.log(Math.max(5, 8, '23', 11, 2)); // 23
// console.log(Math.max(5, 8, '23px', 11, 2)); // NaN - Doesn't doing parsing

// console.log(Math.min(5, 8, 23, 11, 2)); // 2

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1); // +1 is to include 6 

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// // Rounding initigers
// console.log(Math.trunc(23.3)); // Remove decimal part

// console.log(Math.round(23.3)); // 23
// console.log(Math.round(23.9)); // 24

// console.log(Math.ceil(23.3)); // 24
// console.log(Math.ceil(23.9)); // 24

// console.log(Math.floor(23.3)); // 23
// console.log(Math.floor(23.9)); // 23

// console.log(Math.floor(-23.3)); // 23
// console.log(Math.trunc(-23.9)); // 24


// // Rounding Decimals
// console.log((2.7).toFixed(0)); // 3
// console.log((2.7).toFixed(3)); // 2.700 toFixed always return string
// console.log(+(2.345).toFixed(2)); // 2.35 


// The Remainder Operator

// console.log(5 % 2); // 1 ----- 2 * 2 + 1
// console.log(5 / 2); // 2.5

// console.log(8 % 3); // 2 ----- 2 * 3 + 2
// console.log(8 / 3); // 2.66666

// console.log(6 % 2); // 0
// console.log(6 / 2); // 2

// console.log(7 % 2); // 1
// console.log(7 / 2); // 3.5

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(9));
// console.log(isEven(11));

// labelBalance.addEventListener('click', function() {
//   [...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
//     if(i % 2 === 0) row.style.backgroundColor = 'orange';
//     if(i % 3 === 0) row.style.backgroundColor = 'lightblue';
//   });
// });


// 4 Working with BigInt

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(225488955485223112256339447811218446131324471250n);
// console.log(BigInt(225488955485));

// // Operations
// console.log(10000n + 10000n); // 20000n
// console.log(151161165487486461531321316586n * 10000n);

// const huge = 23568774111556987201n;
// const num = 23;
// console.log(huge + BigInt(num));

// // Exceptions
// console.log(20n > 15); // true
// console.log(20n === 20); // false 
// console.log(typeof 20n); // bigint
// console.log(20n == '20'); // true
// console.log(huge + ' is relly big');

// // Divisions
// console.log(11n / 3n);
// console.log(10 / 3);





// 5 Creating Dates
/*
const now = new Date();
console.log(now);

console.log(new Date('Fri Nov 12 2021 13:58:03'));
console.log(new Date('December 24 2014'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33)); // 3rd December

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay()); // Day of the week 1 - 7
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds()); 
// console.log(future.toISOString()); 
// console.log(future.getTime()); // miliseconds which have pased since January 1 1970 

// console.log(new Date(2142253380000));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);




// 6 Operations With Dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);



// 7 Internationalizing Numbers (Intl)

// const num = 3884764.23;

// const options1 = {
//   style: "currency",
//   //unit: "mile-per-hour",
//   currency: 'EUR',
//  // useGrouping: false,
// }

// console.log('US: ', new Intl.NumberFormat('us-US', options1).format(num));
// console.log('DE: ', new Intl.NumberFormat('de-DE' , options1).format(num));
// console.log('Syria: ', new Intl.NumberFormat('ar-SY' , options1).format(num));
// console.log('Browser: ', new Intl.NumberFormat(navigator.language, options1).format(num));

// // 8 Timers setTimeout and setInterval

// // setTimeout
// setTimeout(() => console.log('Here is your pizza 🍕'), 3000);
// console.log('Waiting...');
// // SetTomeout with parameters
// setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1}, ${ing2}`), 3000, 'olives', 'spinach');

// // Clear interval
// const ingredients = ['olives', 'spinach'];
// const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1}, ${ing2}`), 3000, ...ingredients);

// if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// // setInterval
// setInterval(function() {
//   const now = new Date();
//   console.log(now);
// }, 1000);