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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

//displayMovements(account1.movements);
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

 const calcDisplaySummary = function(account) {
  const incomes = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}##`;
  const outcomes = account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${outcomes}##`;
  const interest = account.movements.filter(mov => mov > 0).map(deposit => deposit * account.interestRate / 100)
  .filter((int, i, arr) => (int >= 1))
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}##`;
} 
//calcDisplayBalance(account1.movements);

const createUsernames = function(accs){
  accs.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
}
createUsernames(accounts);

const updateUI = function(acc) {
    // Display movements
    displayMovements(acc.movements);
    // Display balance
    calcDisplayBalance(acc)
    // Display summary
    calcDisplaySummary(acc);
  }

// Event handler
let currentAccount;
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    /// Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    /// Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if(receiverAcc && amount > 0 && currentAccount.balance >= amount &&
     (receiverAcc?.username !== currentAccount.username)
     ) {
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
     }
    
    updateUI(currentAccount);
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
  }

  updateUI(currentAccount);
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if ((currentAccount.username === inputCloseUsername.value) && 
  (currentAccount.pin === Number(inputClosePin.value))) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
console.log(index);
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }  
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/* console.log(accounts);
const movements = account1.movements;
const deposits = movements.filter(function(mov) { 
  return (mov > 0);
})
calcPrintBalance(movements);
console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

const balance = movements.reduce((acc,cur) => acc + cur, 0);
console.log(balance);


// Max value */

//const maxVal = function(movements, i) {
 /*   const balance = movements.reduce((acc, mov) => (acc > acc[i-1]) ? acc = mov : acc = acc, 0);
}
maxVal(movements); */
//console.log(maxVal);

/* const maxVal = movements.reduce(function(acc, cur) { 
  console.log(`CUR: ${cur} - ACC: ${acc}`);
  return (acc > cur) ? acc : cur;
},movements[0]);
console.log(maxVal); */



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
/* console.log("==============");

function calcAverageHumanAge(ages) {
  const humanYears = ages.map(age => (age <= 2) ? age * 2 : age * 4 + 16
  ).filter(age => age >= 18)
  .reduce(function(acc, age, i, total) {
    acc = acc + age / total.length;
    return acc;
  }, 0);
  console.log("HUMAN YEARS: ", humanYears);
};

//calcAverageHumanAge([3,10]);
calcAverageHumanAge([5,2,4,1,15,8,3]);
calcAverageHumanAge([16,6,10,5,6,1,4]); */


/* const calcAverageHumanAge2 = ages => ages
    .map(age => (age <= 2) ? age * 2 : age * 4 + 16)
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//calcAverageHumanAge([3,10]);
const a = calcAverageHumanAge2([5,2,4,1,15,8,3]);
calcAverageHumanAge2([16,6,10,5,6,1,4]); 

console.log("HUMAN YEARS: ", a); */

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
}) */

//console.log(movements);
/* console.log(movementsUSD);

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

console.log(movementsDescriptions); */
 
// PIPELINE

/* const totalDepositsUSD = movements.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, mov, arr) => (acc + mov), 0);
//console.log("totalDepositsUSD: ", totalDepositsUSD);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal); */

/* const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account); */
 
/// Every 
///console.log(movements.every(mov => mov > 0));

/// Flat
/* const arr = [[1,2,3], [4,5,6], 7, 8];
console.log(arr);
console.log(arr.flat());

const arrDeep = [[[1,2] ,3], [4,5,6], 7, 8];
console.log(arrDeep);
console.log(arrDeep.flat(2)); */

//console.log(accounts);

//const accountMovements = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);

//console.log(accountMovements);

/* const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners);
owners.sort();
console.log(owners); */

// Ascending
//console.log(movements);
/* movements.sort((a,b) => {
   if (a > b) return 1;
   if (b > a) return -1;   
})
console.log(movements); */
/* movements.sort((a,b) => a-b);
console.log(movements);

// Descending
movements.sort((a,b) => {
   if (a > b) return -1;
   if (b > a) return 1;   
}) */
//console.log(movements);
/* 
const z = Array.from({length: 100}, (_, i) => Math.floor(Math.random() * 6) + 1);
console.log(z);

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI);

labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), ele => Number(ele.textContent.replace('£', '')));
console.log(movementsUI);
});

labelBalance.addEventListener('click', function() {
const movementsUI2 = [...document.querySelectorAll('.movements__value')];
const movementsUI2a = movementsUI2.map(ele => Number(ele.textContent.replace('£', '')));
console.log(movementsUI2a);
}); */

/// #166  #3  Create an object which contains the sum of the deposits and the withdrawals.
// Reduce boils down an array to just one value, in this case object.
/* 
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum,cur) => sum + cur, 0);
console.log(bankDepositSum); */

/* const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count,cur) => (cur >= 1000 ? count + 1: count), 0);
console.log(numDeposits1000);
 */

/* 
const {deposits, withdrawals} = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums,cur) => {
 //   cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
  }, {deposits: 0, withdrawals: 0});

console.log(deposits, withdrawals);

 */
//4 

/* const convertTitleCase = function (title) {
const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with', 'at'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word: capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('My name is Michael Thompson and I am a Software Developer at Capgemini.'));
 */
/*const convertTitleCase = function(string) {


   const toArrayToString = string.split(' ').reduce(function(acc,ele) {
    acc = (ele.length > 1) ? acc += ele.slice(0, 1).toUpperCase() + ele.slice(1) : acc += ele.slice(0);
    return acc + ' ';
  }, '').trim();
  return toArrayToString;
}; */
//const valueA = convertTitleCase('My name is Michael Thompson and I am a Software Developer at Capgemini.');
//console.log(valueA);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// #1
const recFoodPortion = function(dogs) { dogs
  .forEach(doggie => { doggie.recFoodPortion = Math.round(doggie.weight ** .75) * 28; }); return dogs };
const func1 = recFoodPortion(dogs);
console.log(func1)

// #2
 /* function findSarahsDog(dogs) {
    dogs.forEach(function(dog) { 
      dog.owners.find(function(owner) {
      if (owner === 'Sarah') {
        const dogReco = dog.recFoodPortion;
        const lowReco = dogReco * .9;
        const highReco = dogReco * 1.1;
        if (dog.curFood < lowReco) { console.log(`${owner}'s dog is underfed`); }
        else if (dog.curFood > highReco) { console.log(`${owner}'s dog is overfed`); }
        else { console.log(`${owner}'s dog is fine.`); }
        }      
    })
    })
}
findSarahsDog(dogs);  */
function findSarahsDog(dogs) {
  dogs.forEach(function(dog) { 
    dog.owners.find(function(owner) {
      if (owner.includes("Sarah")) {    
          const dogReco = dog.recFoodPortion;
          const lowReco = dogReco * .9;
          const highReco = dogReco * 1.1;
          if (dog.curFood < lowReco) { console.log(`${owner}'s dog is underfed`); }
          else if (dog.curFood > highReco) { console.log(`${owner}'s dog is overfed`); }
          else { console.log(`${owner}'s dog is fine.`); }       
      }    
  })
  })
};
findSarahsDog(dogs); 
// #3
//underfed
//overfed









