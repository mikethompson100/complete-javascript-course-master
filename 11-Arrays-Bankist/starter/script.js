'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1}</div>
  <div class="movements__value">${mov}</div>
</div>
`;
  containerMovements.insertAdjacentHTML("afterbegin", html);

})
};

displayMovements(account1.movements);

const createUsernames = function(user){
  const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
  console.log(username);
}

accounts.forEach(function(e) {
  createUsernames(e.owner);
})

/* const result = createUsernames('Michael Thompson');*/


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/* 
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
 */
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; */

/////////////////////////////////////////////////

/* console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1)); */

/// SPLICE
//console.log(arr.splice(1,2));
/* console.log(arr.splice(-1));
console.log(arr); */

/* let arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j','i','h','g','f']
/* console.log(arr2); 
console.log(arr2.reverse());
//console.log(arr2);  
const letters = arr.concat(arr2)
console.log(letters);
console.log(...letters);
console.log(letters);
 */

/* const arr = [1,2,3];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length-1]);
console.log(arr.at(-1));
console.log(arr.slice(-1)[0]);
 */

/* const arr = [1,2,-3];

arr.forEach(function(a, index, array) {
  console.log("Array=", (index + 1) + " " + array)
  if (a > 0) console.log("DEP");
  else console.log('WD');
}) */

/* 
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'EUR']);

currenciesUnique.forEach(function(value,_,set) {
console.log(`Value: ${value} - Set: ${[...set]}`);
})
 */

// CODING CHALLENGE:

/* function checkDogs(dogsJulia,dogsKate) {
    const dogsJuliaAlt = [...dogsJulia.slice(1,3)];
    const myArray = dogsJuliaAlt.concat(dogsKate);
    myArray.forEach(function(elem,index) {
      console.log((elem) <= 3 ? `Dog#${index+1}- ${elem} is a puppy` : `Dog#${index+1}- ${elem} is an adult dog.`);
      })
    };


/* const dogsJulia = [3,5,2,12,7];
const dogsKate = [4,1,15,8,3]; 
const dogsJulia = [9,16,6,8,3];
const dogsKate = [10,5,6,1,4];
checkDogs(dogsJulia, dogsKate);
 */
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function(mov){
  return mov * eurToUsd;
})

console.log(movements);
console.log(movementsUSD);

const movementsUSDnew = movements.map(mov => mov * eurToUsd);

console.log(movementsUSDnew);

const movementsDescriptions = movements.map((mov, i, arr) => {
if (mov > 0) {
  return `Movement ${i + 1}: You deposited ${mov}`
}
else {
  return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
}
});

console.log(movementsDescriptions);
 */


