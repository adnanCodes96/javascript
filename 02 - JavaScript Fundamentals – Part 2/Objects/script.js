// Object

// const adnan = {
//     firstName: 'Adnan',
//     lastName: 'Musinovic',
//     age: 2021 - 1996,
//     job: 'Frontend Developer',
//     friends: ['Kola', 'Pele', 'Hamo']
// };

// console.log(adnan);

// Dot notation
// console.log(adnan.lastName);

// Brackets notation
// console.log(adnan['job']);

// const nameKey = 'Name';
// console.log(adnan['first' + nameKey]);
// console.log(adnan['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Adnan? Choose between firstName, lastName, age, job, and friends');

// if(adnan[interestedIn]) {
//     console.log(adnan[interestedIn]);
// } else {
//     console.log('Wrong reques! Choose between firstName, lastName, age, job, and friends');
// }

// Add new proprerty to the object
// adnan.location = 'Berlin';
// adnan['twitter'] = '@adnan_codes';
// console.log(adnan);

// console.log(`${adnan.firstName} has ${adnan.friends.length} friends, and his best friend is called ${adnan.friends[0]}`);

// Object methods
const adnan = {
    firstName: 'Adnan',
    lastName: 'Musinovic',
    birthYear: 1996,
    job: 'Frontend Developer',
    friends: ['Kola', 'Pele', 'Hamo'],
    hasDriversLicense: true,
    
    //Method
    // calcAge: function(birthYear) {
    //     return 2021 - birthYear;
    // }

    // calcAge: function() {
    //     //console.log(this);
    //     return 2021 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    } 
};

console.log(adnan.calcAge());

console.log(adnan.age);
console.log(adnan.age);
console.log(adnan.age);

console.log(adnan.getSummary());

// console.log(adnan['calcAge'](1996));
// console.log(adnan.calcAge(adnan.birthYear));

const pele = {
    firstName: 'Pele',
    job: 'DakaBau',
    birthYear: 2001,
    hasDriversLicense: true,
    calcAge: function() {
        return 2021 - this.birthYear;
    }
}

if(pele.hasDriversLicense) {
    pele.isDriver = 'he has a drivers license';
} else {
    pele.isDriver = 'he has not drivers license';
}

console.log(`${pele.firstName} is a ${pele.calcAge()} years old ${pele.job}, and ${pele.isDriver}`);

// Challenge

const mark = {
    fullName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    mass: 78,
    calcBMI: function() {
        return this.mass / (this.height ** 2);
    }
}

const john = {
    fullName: 'John',
    lastName: 'Smith',
    height: 1.95,
    mass: 92,
    calcBMI: function() {
        return this.mass / (this.height ** 2);
    }
}

if(mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s ${mark.lastName} BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s ${john.lastName} BMI (${john.calcBMI()})`);
} else {
    console.log(`${john.fullName}'s ${john.lastName} BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s ${mark.lastName} BMI (${mark.calcBMI()})`);
}