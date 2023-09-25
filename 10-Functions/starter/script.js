'use strict';
/* 
const bookings = [];

const createBooking = function(flightNum = 123, numPassengers = 1, price = 0) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('test', undefined , 5);

console.log(bookings); */
/* 
const flight = 'LH123';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 130280
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH456';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 130280) {
        alert("checkin");
    }
    else alert("Wrong passport")
}

checkIn(flight, jonas);
/* 
console.log(flight);
console.log(jonas); 

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);

}

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas); */

// section 10;

/* const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

console.log(oneWord("Mike Thompson")); */
/* 
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}
//console.log(upperFirstWord("Mike John Thompson"));

// Higher order function
const transformer = function(str, fn) {
    console.log(fn(str));
    console.log(`${fn.name}`)

}

transformer('Javascript is the best!', upperFirstWord);
const high5 = function() {
    console.log('click');
}
document.body.addEventListener('click', high5);

/// for each
['Jonas', 'Martha', 'Adam'].forEach(high5); /// called 3 times

function lower(e) {
    return e.slice(2);
}

function higher(str, fn) {
    return fn(str);
}

console.log(higher('MichaelThompson', lower)) */

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}
const greeterHey = greet('Hey');
greeterHey('Jonas');

greet('Hello')('Art');













