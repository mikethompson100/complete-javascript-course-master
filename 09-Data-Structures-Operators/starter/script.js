'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  /*  'mon': {
      open: 12,
      close: 22,
    },
    'tue': {
      open: 12,
      close: 22,
    },    
    'wed': {
      open: 12,
      close: 22,
    }, */
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[`${2 + 3}`]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  /*     [days[`${2 + 4}`]]: {
      open: 1, // Open 24 hours
      close: 24,
    }, */
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const properties = Object.keys(openingHours);
//console.log(properties);

for (const day of Object.keys(openingHours)) {
  //console.log(day);
}

/* const values = Object.values(openingHours);
//console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
 */

//console.log(restaurant);
//console.log(openingHours);

/* if (restaurant.openingHours && restaurant.openingHours.fri) {
  //console.log(restaurant.openingHours.fri.open + ".");
}

/// With optional chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open); */

//const days = ['mon','tue','wed','thu','fri','sat','sun'];

/* for (const day of days) {
  const open =  restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0,1) ?? 'method does not exist')

const users = [
  {name: 'Jonas', email: 'mt@mt.com'}
]
console.log(users[0]?.name ?? 'nobody home');

const rest1 = {
  name: 'Capri',
 // numGuests: 20,
  numGuests: 0,
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 6.5,
    x: 3.25,
    team2: 6.5,
  },
}; */

//rest1.numGuests ??= 10;
//rest2.numGuests ??= 10;
/* 
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>'; */

//const [gk, ...fieldPlayers] = players1;
//console.log(gk);
//console.log(fieldPlayers);

/* console.log(rest1);
console.log(rest2); */

/* rest1.numGuests = rest1.numGuests ?? 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2); */

/* 
console.log('==== OR ====');
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1)

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('==== OR ====');

console.log('==== AND ====');

if (restaurant.orderPizza) {restaurant.orderPizza('mushrooms', 'spinach')}

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');

console.log('==== ?? ====');

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); */

/* console.log(restaurant.orderPizza('Mushrooms', 'Pepperoni', 'Meatballs'))
 */

/// Use any data type, return any data type, short-circuiting
/* console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(3 && 4); */
/* 
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
//console.log(gk);
//console.log(fieldPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//console.log(players1Final)

const { odds: { team1, x: draw, team2 }} = game;
console.log(team1, draw , team2);

const printGoals = function(...e) {
    console.log(...e);
  console.log(e.length);
  (game.odds.team1 < game.odds.team2) 

}
printGoals(...game.scored); 

(team1 < team2) && console.log("Team1 more likely to win.");
(team2 < team1) && console.log("Team2 more likely to win.");
(team1 === team2) && console.log("Draw")*/

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  //console.log(`${item[0] + 1}: ${item[1]}`)
} */

/* 

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

const {name, openingHours, categories} = restaurant;
//console.log(name, openingHours, categories);

const {
  name: restaurantName, 
  openingHours: hours, 
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags)

const { menu = [], starterMenu : starters = [] } = restaurant;
console.log(menu, starters)

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a,b} = obj);
console.log(a,b);

// Nested objects
const { fri: {open, close} } = openingHours;
console.log(open, close);

const [starter, mainCourse] = restaurant.order(2,0);

const nested = [2,4,[5,6]];
//const [i,,j] = nested;
const [i, , [j,k]] = nested;

const [p,q,r] = [8,9]
console.log(p,q,r); */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/* for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);
 */
for (let [key, name] of game.scored.entries()) {
  //console.log(`Goal: ${key+1} ${name}`);
}

/* const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length; */
//console.log(average);

/* const odds = Object.entries(game.odds);
for (const [odd] of odds) {
  //string = (odd != 'x') ? (`victory ${game[odd]}: ${game.odds[odd]}`) : (`draw ${game.odds[odd]}`);
  //console.log(`Odds of ${string}`)
} */

// scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
/* 
    const scorers = {};
        for (const player of game.scored) {
          scorers[player] ? scorers[player]++ : (scorers[player] = 1);
        }
        console.log('\n\nScorers Object: ', scorers);
 */

/* let winners = {};
for (const goalScorer of game.scored) {
  /// IF EMPTY ADD FIRST ONE
  if (Object.keys(winners).length === 0 && winners.constructor === Object) {
    console.log(`No need to compare ${goalScorer} to`, winners);
    winners = [goalScorer, 1];
    console.log('INITIAL ASSIGNMENT: ', winners);
    console.log('\n==========================');
  }
  else {  // IF NOT EMPTY LOOP THROUGH ALL ELEMENTS AND FIND DUPES
    
    for (let [key , value] of winners.entries()) {
      console.log("WINNER LOOP: ", key , value);
      if (goalScorer === value) {
          
      }
      else {
        winners = [goalScorer, 1];
      }
    }
  }


}
*/

/*
console.log("\n\nX-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-");
 
const xyz = {
  arr: ['Michael', 'Victoria'],
  obj: {'first': 'Alexandra', 'last': 'Loaiza'}
}

// ARRAY - .entries() is iterable for array element???
/*  for (const ent of xyz.arr.entries()) {
  //console.log(...xyz.arr.keys()); /// numeric index numbers
  //console.log(...xyz.arr.values());  /// actual values in array
  console.log(...xyz.arr.entries()); /// array of key value pairs
  console.log('Individual element', ent);
}  */

// OBJECT with destructured left side and array brackets
/* // Object.entries destructures object element into array
 for (const [a,b] of Object.entries(xyz.obj)) {
  console.log(xyz.obj); /// Shows the object
  console.log(a,b);  // the key value pairs of object
} */

//const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza']);
//console.log(ordersSet.has('Pizza'));

//console.log(ordersSet.add('Garlic Bread'));

//for (const order of ordersSet) console.log(order);

// Example
/* const staff = ['Waiter', 'Manager', 'Chef', 'Manager'];
const staffSet = new Set(staff);
const staffSetArray = [...new Set(staff)];
const staffSetArraySize = new Set(['Waiter', 'Manager', 'Chef', 'Manager']).size;
console.log(staff);
console.log(staffSet);
console.log(staffSetArray);
console.log(staffSetArraySize); */

/* const rest = new Map();
console.log(rest);
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
 */
/* console.log(
  rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed.')
);

const a = rest.get('name');

const time = 21;
console.log(
  rest.get( (time >= rest.get('open')) && (time <= rest.get('close')) )
); */
//console.log(rest.has('categories'));

//rest.set([1,2,3], "myArray");
//console.log(rest.get([1,2,3]));

/* const sharedValue = [1,2,3];
rest.set(sharedValue, "myArray");
rest.set(document.querySelector("h1").innerHTML, 'Heading');
console.log(rest.get('Data Structures and Modern Operators')); */
/* 
 const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!']
]); */
//console.log(question); 
 /* 
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours)); */
/* console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
      console.log(`Answer ${key}: ${value}`);
    }
}

const answer = Number(prompt("Your answer?"));
console.log(answer);

console.log(question.get((question.get('correct') === answer))); */
 
/* console.log(...hoursMap);
console.log([...hoursMap]); */
/* console.log([...[...question.entries()]]);
console.log([...question.keys()]);
console.log([...question.values()]); */



// Coding Challenge #3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/
/* const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]); */

/* const events = new Set([...gameEvents]);
let counter = 0; let runningTotal =0; let total = 0;
let half = "";

gameEvents.delete(64);
console.log(gameEvents);

const time = Math.max(...gameEvents.keys());
console.log(time);

total = time / events.size;
console.log(`An event happened, on average, every ${total} minutes,`);

 */
/* let half;
for (const [min, event] of gameEvents) {
  (min < 45) ? half = "FIRST" : half = "SECOND";
  console.log(`${half} HALF: `, min, event) 
  //(gameEvent[0] < 45 ) ? console.log(`FIRST HALF: `, gameEvent[0], gameEvent[1]) : console.log(`SECOND HALF: `, gameEvent[0], gameEvent[1]);
} */














