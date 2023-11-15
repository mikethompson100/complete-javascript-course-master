'use strict';

// Object Oriented Programming

const Person = function(firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;

/* this.calcAge = function() {
    return 2037 - this.birthYear;
} */
};

const jonas = new Person('Jonas', 1991);

// 1. New empty object is created
// 2. function is called, this = newly create {}
// 3. {} linked to prototype
// 4. function automatically returns {} from the beginning

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas);
console.log(matilda);
console.log(jack);

console.log(jonas instanceof Person);
console.log("Z: ", jonas.calcAge());










