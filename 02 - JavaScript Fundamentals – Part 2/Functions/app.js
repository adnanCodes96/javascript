// function logger() {
//     console.log('My name is Adnan');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 3);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 3));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// //Function Declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //Function Expresion
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1996);
// console.log(age2);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// //Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1996);
// console.log(age3);

// const yearsUntilRetierment = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetierment(1996, 'Adnan'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangesPieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetierment = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }

    
// }

// console.log(yearsUntilRetierment(1991, 'Jonas'));
// console.log(yearsUntilRetierment(1970, 'Mike'));

//Coding challenge
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreCoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgCoalas) {
    if(avgDolphins >= avgCoalas * 2) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgCoalas}`);
    } else if (avgCoalas >= avgDolphins * 2) {
        console.log(`Coalas win ${avgCoalas} vs ${avgDolphins}`);
    } else {
        console.log('nothing');
    }
}

checkWinner(scoreDolphins, scoreCoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreCoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreCoalas);
