'use strict';

// Constructor function - same as regular function but uses "new" when is called

const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create method in the contructor function
    // this.calcAge = function() {
    //     console.log(2021 - this.birthYear);
    // }
};

const adnan = new Person('Adnan', 1996);
console.log(adnan);

Person.hey = function() {
    console.log('Hey there 👋🏼');
}

Person.hey();

// 1. new empty object {} is created
// 2. function is called, this = {}
// 3. {} linkrd to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(adnan instanceof Person);

// Prototypes

Person.prototype.calcAge = function() {
    console.log(2021 - this.birthYear);
};

console.log(Person.prototype);

adnan.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(adnan.__proto__);
console.log(adnan.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(adnan)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.species = 'Homo Sapiens';

console.log(adnan, jack);
console.log(adnan.species, jack.species);

console.log(adnan.hasOwnProperty('firstName'));
console.log(adnan.hasOwnProperty('species'));

// Prototypal Inheritance on Built-In Objects

console.log(adnan.__proto__);
console.log(adnan.__proto__.__proto__);
console.log(adnan.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 4, 5, 6, 9, 3, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed
};

Car.prototype.aaccelerate = function() {
    console.log(this.speed += 10);
}

Car.prototype.brake = function() {
    console.log(this.speed -= 5);
}

const bmw = new Car('BMW', 120);
console.log(bmw);

bmw.aaccelerate();
bmw.brake();

const mercedes = new Car('Mercedes', 95);
mercedes.aaccelerate();
mercedes.aaccelerate();
mercedes.aaccelerate();
mercedes.aaccelerate();
mercedes.brake();

// ES6 Classes

// class expresion
// const PersonCl = class {}

class PersconCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    greet() {
        console.log(`Hello ${this.fullName}`);
    }

    get age() {
        return 2012 - this.birthYear;
    }

    // set a property that allready exists
    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) {
            this._fullName = name;
        } else {
            alert(`${name} is not a full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey = function() {
        console.log('Hey there 👋🏼');
    }
}

// const adnan = new PersconCl('Adnan Musinovic', 1996);
// const walter = new PersconCl('Walter', 1965);
// adnan.calcAge();

// console.log(adnan.age);

// PersconCl.prototype.greet = function() {
//     console.log(`Hello ${this.firstName}`);
// }


PersconCl.hey();

//adnan.greet();

// Setters and Getters

// const account = {
//     owner: 'Adnan',
//     movements: [100, 200, 300, 400],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     }
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);






// Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);

sarah.calcAge();


/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
 */

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    acelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speed);
ford.acelerate();
ford.brake();







// Inheritance Between _Classes__ Constructor Functions

const Personen = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Personen.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

// Constructor function for a student

const Student = function(firstName, birthYear, course) {
    Personen.call(this, firstName, birthYear);
    // this.firstName = firstName; // Same property as in Personen
    // this.birthYear = birthYear; // Same property as in Personen
    this.course = course; // Aditional property
};

// Linking prototypes
Student.prototype = Object.create(Personen.prototype);

Student.prototype.introduce = function() {
    console.log(`Hello my name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Sience');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Personen);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);