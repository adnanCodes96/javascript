'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
    
//     function printAge() {
//         let output = `${firstName} you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Pundo';
//             const str = `Oh, and you are millenial, ${firstName}`;
//             console.log(str);   

//             function add(a, b) {
//                 return a + b;
//             }

//             output = 'NEW OUTPUT';
//         }

//         // console.log(str);
//         console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);

//     }

//     printAge();

//     return age;
// }

// const firstName = 'Adnan';
// calcAge(1991);

// Hoisting and TDZ

// Variables
// console.log(me);
// // console.log(job);
// // console.log(birthYear);

// var me = 'Adnan';
// let job = 'Developer';
// const birthYear = 1996;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));


// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// // Example

// if(!numProducts) deleteShopingCart();

// var numProducts = 10;

// function deleteShopingCart() {
//     console.log('All products delete');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// THIS

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(1980);

// const adnan = {
//     birthYear: 1996,
//     calcAge: function() {
//         console.log(this);
//         console.log(2021 - this.birthYear);
//     }
// }

// adnan.calcAge();

// const matilda = {
//     birthYear: 2017,
// };

// matilda.calcAge = adnan.calcAge;
// matilda.calcAge();

// const f = adnan.calcAge;
// f();

// const adnan = {
//     firstName: 'Adnan',
//     birthYear: 1996,
//     calcAge: function() {
//         console.log(this);
//         console.log(2021 - this.birthYear);

//         // Solution 1

//         // const self = this; // Can be called self or that

//         // const isMillenial = function() {
//         //     console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
//         //     // console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
//         // }

//         // Solution 2

//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
//         }

        

//         isMillenial();

//     },

//     greet: () => console.log(`Hey ${this.firstName}`),
// }

// adnan.greet();
// adnan.calcAge();    

// // Argument keyword

// const addExpr = function(a, b) {
//     console.log(arguments);
// }

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//     return a + b;
// }; 

// addArrow(2, 5, 8);

// Primitives vs Objects

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Adnan',
    age: 30
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);

// Primitive types

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference types

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {};

// Copying object

const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2, jessicaCopy);