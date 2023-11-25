'use strict';

// Object Oriented Programming

const Person = function(firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);

// 1. New empty object is created
// 2. function is called, this = newly create {}
// 3. {} linked to prototype
// 4. function automatically returns {} from the beginning
/* 
console.log(jonas);
console.log(jonas instanceof Person); */

Person.hey = function() {
    console.log("Hey there!!!!!!!!!!!");
    console.log(this);
};

Person.hey();

Person.prototype.calcAge = function() {    
    return 2037 - this.birthYear;
};

console.log(Person.prototype);

console.log(jonas);
console.log(jonas.calcAge());
console.log(jonas.__proto__);

Person.prototype.species = "Human";

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

/// Lecture on Prototypal Inheritance and the Prototypal Chain

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3,4,6,6,8,2,9,9];
const arr2 = [1,1,1,2,2,2,3,3,3];
console.log(arr.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());
console.log(arr2.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x=>x*y);

// Coding challenge #1 OOP 

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log("New speed: ", this.speed);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log("New speed: ", this.speed);
};

const mikeCar = new Car('Jeep', 55);
console.log(mikeCar);

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw, mercedes);

// ES 6 classes
class PersonCL {
    constructor(fullName, birthyear){
        this.fullName = fullName;
        this.birthYear = birthyear;
    }

    // Methods will be added to the .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        }
        else console.log("Missing last name");
    }
    get fullName() { return this._fullName }

    // static method
    static hey() {        
        console.log("Hey there!!!!!!!!!!!");
        console.log(this);
    };
};

const jessica = new PersonCL('Jessica Simpson', 1996);
const mike = new PersonCL('Michael Thompson', 1970);
const walter = new PersonCL('Walter Thompson', 1965);
//console.log(jessica.age);

//console.log(jessica.__proto__ === PersonCL.prototype);

PersonCL.prototype.greet = function() {
    console.log(`${this.firstName}`);
};
jessica.greet();

// Object getters and setters



const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Static methods
















