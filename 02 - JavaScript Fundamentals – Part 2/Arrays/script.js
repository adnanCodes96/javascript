// Arrays

//Type 1
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Type 2
const years = new Array(1991, 1984, 2008, 2020);

//Console log first item of array
console.log(friends[0]);

//Console log last item of array
console.log(friends[2]);
console.log(friends[friends.length - 1]);

//Console log length of array
console.log(friends.length);

//Mutate array
friends[2] = 'Jay';
console.log(friends);

//Not allowed
//friends = ['Bob', 'Alice'];

//Arraw with different data types
const firstName = 'Adnan';
const adnan = [firstName, 'Musinovic', 2021 - 1996, 'programmer', friends];
console.log(adnan);

//Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const jahren = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(jahren[0]);
const age2 = calcAge(jahren[1]);
const age3 = calcAge(jahren[jahren.length - 1]);

const ages = [calcAge(jahren[0]), calcAge(jahren[1]), calcAge(jahren[jahren.length - 1])];

console.log(ages);

const jarani = ['Kola', 'Hamo', 'Pele'];

//Add element to the end of an array
jarani.push('America');
console.log(jarani);

//Add element to the begining of an array
jarani.unshift('Pecija');
console.log(jarani);

//Remove last element of an array
jarani.pop();
console.log(jarani);

//Remove first element of an array
jarani.shift();
console.log(jarani);

//Position of an element in array
console.log(jarani.indexOf('Hamo'));
console.log(jarani.indexOf('Arif'));

//Includes = return true if element is in an array or false if is not ES6
console.log(jarani.includes('Hamo'));
console.log(jarani.includes('Arif'));

if(jarani.includes('Hamo')) {
    console.log('Tu je');
} else {
    console.log('nije tu');
}

//Callenge

function calcTip(bill) {
    if(bill > 50 && bill < 300) {
        let total = bill * 0.15;
        return total
    } else {
        let total = bill * 0.20;
        return total;
    }
}

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
let totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
console.log(bills, tips, totals);
