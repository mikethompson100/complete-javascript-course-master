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
console.log(jonas); */

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);

}

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);

















