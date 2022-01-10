'use strict';

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {

    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    };

    console.log(booking);
    bookings.push(booking);

};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

const flight = 'LH234';
const adnan = {
    name: 'Adnan Musinovic',
    passport: 21224953721
}

const checkIn = function(flightNumber, passenger) {
    flightNumber = 'LH999',
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 21224953721) {
        alert('Checked In');
    } else {
        alert('Wrong passport')
    }
}

// checkIn(flight, adnan);
// console.log(flight);
// console.log(adnan);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000000);
};

// newPassport(adnan);
// checkIn(flight, adnan);






// Functions Accepting Callback Functions

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return[first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time

const high5 = function() {
    console.log('🖐');
}

// document.body.addEventListener('click', high5);
// ['cj', 'sweet', 'ryder'].forEach(high5);

// Functions returning functions

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Adnan');

const greet = (greeting) => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hello');
greeterHey('Adnan');

// The call and apply methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }, 
};

lufthansa.book(239, 'Adnan Musinovic');
lufthansa.book(635, 'Mike Torreno');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book;

// Does NOT working 
// book(101, 'Carl Johnson');

// Call method
book.call(eurowings, 101, 'Carl Johnson');
console.log(eurowings);

book.call(lufthansa, 23, 'Sweet Johnson');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 168, 'Cesar Vialpando');
console.log(swiss);

// Apply method

const flightData = [968, 'Big Smoke'];
book.apply(swiss, flightData); // Does not use in modern javascript
console.log(swiss);

book.call(swiss, ...flightData); // Use instead apply in modern js - it is same as apply

// The BIND method

// book.call(eurowings, 101, 'Carl Johnson');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(101, 'Carl Johnson');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Adnan Musinovic');
bookEW23('Ken Rosenberg');

// BIND with event listeners

lufthansa.planes = 300;

lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial aplication
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

//const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

// console.log(addVAT(100));
// console.log(addVAT(23));

const addTax = function (rate) {
    return function(value) {
        console.log(value + value * rate);
    }
}

const addTaxano = addTax(0.1);
addTaxano(100);

// Coding Challenge

/*
Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:

1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]


*/

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    // Method
    registerNewAnswer() {
        // Crete prompt with options i new row
        const question = prompt(`${this.question} \n ${this.options.join('\n')}`);

        // Prompt value - 1, 2 or 3
        const inputNumber = Number(question);

        // Update answers array
        // if(inputNumber <= this.answers.length) {
        //     if(inputNumber === 0) {
        //         this.answers[0]++;
        //     } else if (inputNumber === 1) {
        //         this.answers[1]++;
        //     } else if (inputNumber === 2) {
        //         this.answers[2]++;
        //     } else if (inputNumber === 3) {
        //         this.answers[3]++;
        //     }
        // } else {
        //     alert('Wrong number');
        // }

        typeof inputNumber === 'number' && inputNumber < this.answers.length && this.answers[inputNumber]++; 
        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));







// Immediately Invoked Function Expressions (IIFE)

(function() {
    console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();







// Closures




// Coding Challenge

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.body.addEventListener('click', () => {
        header.style.color = 'blue';
    });
    
})();
