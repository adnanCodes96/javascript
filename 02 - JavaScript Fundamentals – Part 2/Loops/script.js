// For Loop
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// //Loop through an array
// let adnan = [
//     'Adnan',
//     'Musinovic',
//     2021-1996,
//     'frontend developer',
//     ['Kola', 'Hamo', 'Pele'],
//     true
// ];

// let types = []

// for(let i = 0; i < adnan.length; i++) {
//     //Reading from adnan array
//     console.log(adnan[i]);

//     //Filling types array
//     //types[i] = typeof adnan[i]; 
//     types.push(typeof adnan[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for(let i = 0; i < years.length; i++) {
//     ages.push(2021 -years[i]);
// }

// console.log(ages);

// //Continue and break
// console.log('--- ONLY STRINGS ---');
// for(let i = 0; i < adnan.length; i++) {
//     //console.log only strings
//     if(typeof adnan[i] !== 'string') continue;
//     console.log(adnan[i]);
// }


// console.log('--- BREAK WITH NUMBER ---');
// for(let i = 0; i < adnan.length; i++) {
//     //console.log only strings
//     if(typeof adnan[i] == 'number') break;
//     console.log(adnan[i]);
// }


// let adnan = [
//     'Adnan',
//     'Musinovic',
//     2021-1996,
//     'frontend developer',
//     ['Kola', 'Hamo', 'Pele'],
//     true
// ];

// // Looping backwards
// for(let i = adnan.length - 1; i >= 0; i--) {
//     console.log(i, adnan[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--Starting exercise ${exercise}--`);

//     for(let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
// }

//For loop
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

//While loop
// let rep = 1;
// while(rep <= 10) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if(dice === 6) {
//         console.log('Loop is about to end ...');
//     }
// }

//Challenge

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

function calcTip(bill) {
    if(bill >= 50 && bill <= 300) {
        let total = bill * 0.15;
        return total;
    } else {
        let total = bill * 0.20;
        return total;
    }
}

for(let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

function caclAverage(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
} 

console.log(caclAverage([2, 3, 10]));
console.log(caclAverage(totals));

