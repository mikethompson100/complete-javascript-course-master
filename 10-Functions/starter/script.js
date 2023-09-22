'use strict';

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

console.log(bookings);





















