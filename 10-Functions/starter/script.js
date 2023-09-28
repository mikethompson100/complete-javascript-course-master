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

/* const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
} */
/* const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`)
    }
}
const greeterHey = greet('Hey');
greeterHey('Jonas');

greet('Hello')('Art'); */

/* const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LM',
    bookings: [], 
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
        //console.log(this.bookings);
    }
}; */
/* 
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(130, 'Michael J. Thompson'); */

/* const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'SW',
    bookings: []
}

const book = lufthansa.book; */

//Does not work
//book(239, 'Jonas Schmedtmann!');

//book.call(eurowings, 23, 'Sarah Williams');

// apply
/* const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings); */

/* const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss); */
//console.log(bookEW);
/* bookEW(25, "Adam Thompson")
bookLH(25, "Brandon Thompson")
bookSW(25, "Chris Thompson")

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Karin Thompson');
bookEW23('Victoria Thompson'); */

// Event listeners
/* lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); */

// Partial application

/* const addTax = (rate, value) => value + value * rate;
const addVAT = addTax.bind(null, .23);
//console.log(addVAT(100));

function addTaxRate(rate) {
    return function(value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(.23);
console.log(addVAT2)  */

/* const test2 = () => (rate,value) => value + value * rate;
console.log(test2()(.1,100)); */

let answer = '';

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
      // Get answer
      const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
      console.log(answer);
  
      // Register answer
      typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
      console.log(`answer: ${answer}`);
      this.displayResults();
      this.displayResults('string'); 
    },
    displayResults(type = 'array') {
        if (type === 'array') { console.log(`ARRAY ANSWER: Poll results are:`, this.answers);
        }
        else if (type === 'string') {
            const output = [...this.answers].join(',');
            console.log(`STRING ANSWER: Poll results are: ${output}`);
        }
        else console.log(`Hmm, this is neither an array nor string.`)
    }
  };
  /* registerNewAnswer = function() {        
    let answer = prompt(`What is your favorite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (write option number)
    4: End.
    `);
    answer = Number(answer);
    //console.log("answer >= 0 && answer <= 3: ", (answer >= 0 && answer <= 3));
    
(answer !=4) ? poll.answers[answer]++ : answer = answer;
} */
poll.registerNewAnswer()
//testVar.bind(poll);
   const pollbutton = document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
   

 
/* 
   displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
 */















