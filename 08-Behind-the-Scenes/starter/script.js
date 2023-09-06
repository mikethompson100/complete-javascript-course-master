'use strict';
/// Mostly lecture lesson
/* 
function calcAge(birthyear) {
    const age = 2037 - birthyear;
    function printAge() {
        let output = `You are the ${age}, born in ${birthyear}`;
        console.log(output);

        if(birthyear >= 1969 && birthyear <= 1996)
        {
            const firstName = "Michael";
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str)
            function add(a,b) {
                return a + b;
            }
            output = 'NEW OUTPUT';

        }
        //console.log(add(2, 5));
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Mike';
console.log(calcAge(1970));
 */

/* console.log(me);
console.log(job);
console.log(year);

var me = 'Michael Thompson';
let job = 'Full Stack Web Developer';
const year = 2024; */

// functions

/* console.log(addDecl(2,3));
console.log(addExpr(2,3));
console.log(addArrow(2,3));


function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a + b;
}

const addArrow = (a,b) => a + b; */
/* console.log(numProducts);
if(!numProducts) deleteShoppingCart();

console.log(numProducts);
var numProducts = 10;

console.log(numProducts);
function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3; */

//console.log(this);
/* 
const calcAge = function(birthyear) {
    console.log(2037 - birthyear);
    console.log("1" + this);
}
calcAge(1991);

const calcAgeArrow = birthyear => {
console.log(2037 - birthyear);
console.log("2" + this);
}
calcAgeArrow(1980); */

/* const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

const matilda = {
    year: 2017
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge(this);

const f = jonas.calcAge;

f();
 */
/* 
const jonas = {
    firstName: 'Michael',
    year: 1991,
    calcAge: function () {
        //console.log(2037 - this.year);
/*         const self = this;
        const isMillenial = function () {
            console.log(self.year >= 1981 && self.year <= 1996);
        }   */
        
        /* const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    }, */
    //greet: () => console.log(`Hey, ${this.firstName}`)
/* } */

//jonas.greet();/* 
/* jonas.calcAge();

const addExpr = function (a,b) {
    console.log(arguments);
    return a + b;
}
addExpr(2,5);

var addArrow = (a,b) => a + b;
  */
const me = {
    name:'Jonas',
    age: 30
}

const friend = me;
friend.age = 27;
console.log('Friend: ' , friend);
console.log('Me: ' , me)











