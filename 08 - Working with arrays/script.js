'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Adnan Musinovic',
  movements: [4200, -360, -900, 750, -120, 1200, 350],
  interestRate: 1.7,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
const displayMovements = function(movements, sort = false) {

  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
}

displayMovements(account1.movements);



const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce(function(acc, cur) {
    return acc + cur;
  }, 0);

  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate) / 100).filter((int, i, arr) => {return int >= 1 }).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;

};

const createUsernames = function(accs) {

  accs.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });

};

createUsernames(accounts);
// console.log(accounts);

const updateUI = function(acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handler

let currentAccount;

btnLogin.addEventListener('click', function(e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // It will lose focus

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';  
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 && reciverAcc && currentAccount.balance >= amount && reciverAcc?.username !== currentAccount.username) {

    // Doing the transfer
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    // Update ui
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  
  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Clear fields
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false; 

btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Simple array methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // Slice - does not change original array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// // To make shallow copy
// console.log(arr.slice());
// console.log([...arr]);

// // Splice - does change original array
// // console.log(arr.splice(2));
// // To delete last item in array
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// // Reverse - does mutate original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// console.log(arr2);

// // Concat - does mutate original array
// let letters = arr.concat(arr2);
// console.log(letters);
// // Same as
// console.log([...arr, ...arr2]);

// // Join
// console.log(letters.join(' - '));

// For of loop can break out loop
// for (const movement of movements)
// for (const [i, movement] of movements.entries()) {
//   if(movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('----- ForEach -----');

// // ForEach loop can not break out loop
// movements.forEach(function(movement, index, array) {
//   if(movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });


// // forEach with maps and sets

// // Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GPB', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function(value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// Sets does not have keys and values
// _ (uderscore) is throwaway variable - variable that is completly unnecessary

// Coding challenge

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/

const checkDogs = function(dogsJulia, dogsKate){
  let juliaNewArr = dogsJulia.slice(1, -2);

  const fullArr = juliaNewArr.concat(dogsKate);

  fullArr.forEach(function(value, index, array) {
    if(value <= 3) {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    } else {
      console.log(`Dog number ${index + 1} is an adult and is ${value} years old`);
    }
  });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// The MAP Method

const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

const movementsUSDfor = [];

for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

const movementsDescription = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
// console.log(movementsDescription);

// The FILTER method

const deposits = movements.filter(function(mov) {
  return mov > 0;
});

// console.log(deposits);

// Same thing with for of loop
const depositsFor = [];
for(const mov of movements) if(mov > 0) depositsFor.push(mov);
// console.log(depositsFor);


const withdrawals = movements.filter(function(mov) {
  return mov < 0;
});

// console.log(withdrawals);

// The REDUCE method

// const balance = movements.reduce(function(acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);

//   return acc + cur;
// }, 0);

// with arrow function
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// // same thing with for of loop

// let balance2 = 0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2);

// // return maximum value
// const max = movements.reduce((acc, mov) => {
//   if(acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(max);

// Coding callenge

/*
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcAverageHumanAge = function(ages) {

//   const age = ages.map(function(age){

//     if(age <= 2) {
//       return 2 * age;
//     } else {
//       return 16 + age * 4;
//     }

//   });

//   console.log(age);

//   const adults = age.filter(function(age) {
//     return age >= 18;
//   });

//   console.log(adults);

//   const average = adults.reduce(function(x, y) {
//     return x + y / adults.length;
//   }, 0);

//   console.log(average);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// // Chaining Methods

// //PIPELINE
// const totalDepositUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);

// const cah = (ages) => ages.map(age => age <= 2 ? age * 2 : 16 + age * 4)
//   .filter(age => age >= 18)
//   .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = cah([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = cah([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1);
// console.log(avg2);

// // The FIND method

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// Some and Every Methods

console.log(movements);

// Checks EQUALITY
console.log(movements.includes(-130));

// SOME Method
// CONDITION
console.log(movements.some(mov => mov === -130));


const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY Method
console.log(movements.every(mov => mov > 0)); // False because there are some negative values in array
console.log(account4.movements.every(mov => mov > 0)); // True because all values in array are positive

// Separate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


// FLAT and FLATMAP
const arr = [[1,2,3], [4,5,6], 7,8];
console.log(arr.flat()); // [1,2,3,4,5,6,7,8]

const arrDeep = [[[1,2],3], [4,[5,6]], 7,8];
console.log(arrDeep.flat()); // [[1,2,3], [4,5,6], 7,8]
console.log(arrDeep.flat(2)); //  // [1,2,3,4,5,6,7,8] - flat(2) meant it goes 2 levels deep in array - not usefull 

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBallance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBallance); 

// With chaining
// Flat
const overalBallance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overalBallance);

// flatMap
const overalBallance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overalBallance2);






// Sorting arrays

// Strings
const owners = ['Adnan', 'Carl', 'Tommy', 'Franklin'];
console.log(owners.sort()); // A - Z
console.log(owners); // Mutate array

// Numbers
console.log(movements);

// RETURN < 0, A B keep order
// RETURN > 0, B A switch order

// Ascending
// movements.sort((a, b) => {
//   if(a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if(a > b) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

movements.sort((a, b) => b - a);
console.log(movements);









// More Ways of Creating and Filling Arrays

const arr2 = [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

//x.fill(1);
//x.fill(value, position-from, position-to);
x.fill(1, 3, 5);
console.log(x);

arr2.fill(23, 4, 6);
console.log(arr2);

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));

  console.log(movementsUI);
});











// Coding challenge

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(dog => { dog.recomendedFood = Math.trunc(dog.weight * 0.75 * 28)});
console.log(dogs);

// 2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah); 
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recomendedFood ? 'too much' : 'too little'}`);

// 3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recomendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatLittle = dogs.filter(dog => dog.curFood < dog.recomendedFood).flatMap(dog => dog.owners);
console.log(ownersEatLittle);

// 4 
/*
matilda and alice and bobs dog eat too much
sarah and john and michaels dog eat too little
*/

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatLittle.join(' and ')}'s dogs eat too little!`);

// 5
console.log(dogs.some(dog => dog.curFood === dog.recomendedFood));

// 6
console.log(dogs.some(dog => dog.curFood > (dog.recomendedFood * 0.90) && dog.curFood < (dog.recomendedFood * 1.10)));

// 7 
console.log(dogs.filter(dog => dog.curFood > (dog.recomendedFood * 0.90) && dog.curFood < (dog.recomendedFood * 1.10)));

// 8
const dogsCopy = dogs.slice().sort((a, b) => a.recomendedFood - b.recomendedFood);
console.log(dogsCopy); 
























