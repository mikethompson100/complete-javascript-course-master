'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function(starterIndex,mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(`Order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
    orderPasta: function(ing1, ing2,ing3) {
      console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}.`)
    },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);

  }
};
console.log('==== OR ====');
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1)

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('==== OR ====');


console.log('==== AND ====');

if (restaurant.orderPizza) {restaurant.orderPizza('mushrooms', 'spinach')}

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');









/* console.log(restaurant.orderPizza('Mushrooms', 'Pepperoni', 'Meatballs'))
 */

/// Use any data type, return any data type, short-circuiting
/* console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(3 && 4); */



/* const add = function(...numbers) {
  console.log(numbers);
  console.log(arguments);
  const [a,b,c,d,e,f,g] = numbers;
  console.log(a,b,c,d,e,f,g);
}

add(2, 3);
add(5, 3, 7, 2);
add(8,2,5,3,2,1,4);

const x = [1,2,3];
add(...x);
 */







/* 
const arr = [1,2, ...[3,4]];
console.log(arr);
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others); */

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
/* console.log(pizza);
console.log(risotto);
console.log(otherFood); */

/* 
const { sat, ...weekdays} = restaurant.openingHours;
console.log(sat)
console.log(weekdays); */
/* const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),prompt('Let\'s make pasta! Ingredient 2?'),prompt('Let\'s make pasta! Ingredient 3?')]
console.log(restaurant.orderPasta(...ingredients));
 */
/* const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Molinaro';
console.log(restaurantCopy);


const newMenu = [...restaurant.mainMenu, 'Gnocci']; */
/* console.log(newMenu);
console.log(...newMenu); */

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(menu);

// Iterables
const str = 'Michael Thompson';
const letters = [...str, ' ', 'S.'];
/* console.log(str);
console.log(letters);
console.log(...str);
console.log(...letters); */










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

