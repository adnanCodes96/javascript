
'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order recived! ${this,this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// 1. DESTRUCTING ARRAYS
// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// // Switching variables

// // const temp = first;
// // first = second;
// // second = temp;
// // console.log(first, second);

// [first, second] = [second, first]; 
// console.log(first, second);

// // Recive 2 return values from a function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // Nested descontructing
// const nested = [2, 4, [5, 6]];
// //const [i, , j] = nested;
// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);





// 2 Destructuring objects

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// // Changing original variable names
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// // Setting default value
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;

// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a, b);

// // Nested Objects
// const {fri: {open, close}} = openingHours;
// console.log(open, close);

// // Renaming variable names in nested object
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole 21',
//   mainIndex: 2,
//   starterIndex: 2
// });
 
// restaurant.orderDelivery({
//   address: 'Via del Sole 21',
//   starterIndex: 1
// }); 







// 3 Spread operator (...)

// const arr = [7, 8, 9];
// const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(newBadArr);

// const newGoodArr = [1, 2, ...arr];
// console.log(newGoodArr);

// // Individual values of array
// console.log(...newGoodArr);

// // Adding new elemnt to array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy Arrar
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 or more arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // ITERABLES: arrays, strings, sets, maps NOT objects
// const str = 'Adnan';
// const letters = [...str, '', 'M.'];
// console.log(letters);
// console.log(str);
// // Spread operator works only where colon , is expected
// // console.log(`${...str} Musinovic`); - Not working

// // Real world-example
// // const ingredients = [prompt('Let\s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Let\s make pasta! Ingredient 3?')];
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guissepe'};
// console.log(newRestaurant);

// // Copy Object
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);






// 4 Rest pattern and parameters

// 4.1 DESTRUCTURING

// SPREAD because of the RIGHT side of =
// const arr = [1,2,3,4,5];

// // REST because of the LEFT side of =
// const [a, b, ...others] = [1,2,3,4,5];
// console.log(a,b,others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // 4.2 FUNCTIONS
// const add = function(...numbers) {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }

// add(2, 3);
// add(2, 3, 4, 5);
// add(1, 2, 3, 4, 5, 6, 7, 8);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('a', 'b', 'c', 'd', 'e');
// restaurant.orderPizza('g');










// // 5 Short Circuiting (&& and __)

// // 5.1 || OR operator
// // Use ANY data type, return ANY data type, short-circuiting return first truthy value
// console.log(3 || 'Adnan'); // 3
// console.log('' || 'Adnan'); // Adnan
// console.log(true || 0); // true
// console.log(undefined || null); // null 
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// //restaurant.numGuests = 23;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // 5.2 AND && operator
// // Returns first falsy value
// console.log(0 && 'Adnan'); // 0
// // When both values are truthy the last value will be returned
// console.log(7 && 'Adnan'); // Adnan
// console.log('Hello' && 23 && null && 'Adnan'); // null

// // Practical example
// if(restaurant.orderPizza) {
//   restaurant.orderPizza('a', 'b');
// }

// restaurant.orderPizza && restaurant.orderPizza('c', 'd');




// // 06  The Nullish Coalescing Operator

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

/* CODING CHALLENGE 1 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },

  printGoals: function(...goals) {
    console.log(`${goals.length} were scored`);
  }
};


// Coding challenge 01

// 1
// const [player1, player2] = game.players;
// console.log(player1, player2);

// // 2
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// // 3
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// // 4
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5
// const {team1, x: draw, team2} = game.odds;
// console.log(team1, draw, team2);

// // 6 
// game.printGoals(...game.scored);
// game.printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// Coding challenge 02

// 01
// let gameEntries = game.scored.entries();

// for(const [num, players] of gameEntries) {
//     console.log(`Goal ${num + 1}: ${players}`);
// }

// // 02

// let gameOddValue = Object.values(game.odds);
// let x = 0;

// for (const z of gameOddValue) {
//   x += z;
// }

// x /= gameOddValue.length;
// console.log(x);

// 03 


// 07 The for of loop

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) console.log(item);

// for(const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for(const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }





// // 08 Enhanced Object Literals

// // 09 Optional Chaining

// if(restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // Without optional chaining - error
// // console.log(restaurant.openingHours.mon.open);

// // With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On day ${day} we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{
//   name: 'Adnan',
//   email: 'hello@adnan.io'
// }]

// console.log(users[0]?.name ?? 'User array empty'); 

// // Hard way
// if(users.length > 0 ) {
//   console.log(users[0].name) 
// } else {
//   console.log('User array empty');
// }









// // 10 Looping Objects - Object keys values and entries

// // Property NAMES

// const properties = Object.keys(openingHours);
// let openStr = `We are open for ${properties.length} days: `;

// for(const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// Property Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entrie objects
// const entries = Object.entries(openingHours);
// console.log(entries);

// for(const [key, {open: o, close: c}] of entries) {
//   console.log(`On ${key} we are open at ${o} and close at ${c}`);
// }







// 11 Sets

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);
// console.log(new Set('pundo'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic bread');
// orderSet.add('Garlic bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);

// // Convert set to array
// const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Manager', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Manager', 'Chef', 'Manager', 'Waiter']).size);








// // Maps

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze Italy');
// console.log(rest.set(2, 'Dietzenbach Germany'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open').set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

// // Maps iteration

// const questions = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again'],
// ]);

// console.log(questions);

// // Convert Object to Map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(questions.get('question'));

// for (const [key, value] of questions) {
//   if(typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// if (answer === questions.get('correct')) {
//   console.log(questions.get(true));
// } else {
//   console.log(questions.get(false));
// }

// // Convert Map to Array
// console.log([...questions]);
// // console.log(questions.entries());
// console.log([...questions.keys()]);
// console.log([...questions.values()]);

// Coding Challenge #3

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = gameEvents.values();
// console.log([...new Set(events)]);

// gameEvents.delete(64);
// console.log(gameEvents);


// const time = [...gameEvents.keys()].pop();
// console.log(`An event happent every ${time / gameEvents.size} minutes`);

// for(const [key, value] of gameEvents) {
//   if(key < 45) {
//     console.log(`First half ${key}: ${value}`);
//   } else {
//     console.log(`Second half ${key}: ${value}`);
//   }
// }








// Working with strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('Portugal'));
console.log(airline.slice(4)); 
console.log(airline.slice(4, 7)); 

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  const s = seat.slice(-1);

  if(s === 'B' || s === 'E') {
    console.log('You got the middle seat 🤔');
  } else {
    console.log('You got lucky 😎');
  }


};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'adNaN';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'adnancodes@gmail.com';

const loginEmail = '    ADnAnCODes@GMaIl.cOm   \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// Faster way
const normalizedEmail = email.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23.';
console.log(announcement.replaceAll(/door/g, 'gate'));


// Booleans 
const airplane = 'Airbus A320neo';
console.log(airplane.includes('A320')); // True
console.log(airplane.includes('Boeing')); // False
console.log(airplane.includes('Airb')); // True

if(airplane.startsWith('Airbus') && airplane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }

};

checkBaggage('I have laptop, some Food and pocken Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Split and join

console.log('a+very+nice+string'.split('+')); // Array 
console.log('adnan musinovic'.split(' '));

const [firstName, lastName] = 'Adnan Musinovic'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join('-');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUppper = [];

  for(const n of names) {
    namesUppper.push(n[0].toUpperCase() + n.slice(1));
  }

  console.log(namesUppper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('adnan musinovic');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Adnan'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(3635221178349201));
console.log(maskCreditCard('3635221178349201'));

// Repeat 

const message2 = 'Bad weather... All Departues Delayed...';

console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);

// Coding Challenge 

/*

Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!


*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');
  
  for(const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}` + `${second[0].toUpperCase()}` + `${second.slice(1)}`;
    
    console.log(output.padEnd(20) + `${'✅'.repeat(i + 1)}`);

  }

})