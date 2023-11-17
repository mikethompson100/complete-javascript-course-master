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