'use strict';

// Object Oriented Programming

const Person = function(firstName, birthYear) {
console.log(this);
};

new Person('Jonas', 1991);

// 1. New empty object is created
// 2. function is called, this = newly create {}
// 3. {} linked to prototype
// 4. function automatically returns {} from the beginning


