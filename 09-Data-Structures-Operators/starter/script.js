'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day#${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingHours);



// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex,mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery({starterIndex, mainIndex, time, address}) {
    console.log(`Order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
    orderPasta(ing1, ing2,ing3) {
      console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}.`)
    },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);

  }
};
console.log(restaurant);

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
};

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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`)
}

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

 */



/* const [starter, mainCourse] = restaurant.order(2,0);

const nested = [2,4,[5,6]];
//const [i,,j] = nested;
const [i, , [j,k]] = nested;

const [p,q,r] = [8,9]
console.log(p,q,r); */

