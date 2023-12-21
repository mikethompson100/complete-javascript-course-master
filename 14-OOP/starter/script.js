'use strict';

// Object Oriented Programming

/* const Person = function(firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991); */

// 1. New empty object is created
// 2. function is called, this = newly create {}
// 3. {} linked to prototype
// 4. function automatically returns {} from the beginning
/* 
console.log(jonas);
console.log(jonas instanceof Person); */

/* Person.hey = function() {
    console.log("Hey there!!!!!!!!!!!");
    console.log(this);
};

Person.hey();

Person.prototype.calcAge = function() {    
    return 2037 - this.birthYear;
};

console.log(Person.prototype);

console.log(jonas);
console.log(jonas.calcAge());
console.log(jonas.__proto__);

Person.prototype.species = "Human";

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

/// Lecture on Prototypal Inheritance and the Prototypal Chain

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3,4,6,6,8,2,9,9];
const arr2 = [1,1,1,2,2,2,3,3,3];
console.log(arr.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());
console.log(arr2.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x=>x*y); */

// Coding challenge #1 OOP 
/* 
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log("New speed: ", this.speed);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log("New speed: ", this.speed);
}; */
/* 
const mikeCar = new Car('Jeep', 55);
console.log(mikeCar);

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw, mercedes); */

// ES 6 classes
/* class PersonCL {
    constructor(fullName, birthyear){
        this.fullName = fullName;
        this.birthYear = birthyear;
    }

    // Methods will be added to the .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        }
        else console.log("Missing last name");
    }
    get fullName() { return this._fullName }

    // static method
    static hey() {        
        console.log("Hey there!!!!!!!!!!!");
        console.log(this);
    };
}; */

/* const jessica = new PersonCL('Jessica Simpson', 1996);
const mike = new PersonCL('Michael Thompson', 1970);
const walter = new PersonCL('Walter Thompson', 1965);
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCL.prototype); */
/* 
PersonCL.prototype.greet = function() {
    console.log(`${this.firstName}`);
};
jessica.greet(); */

// Object getters and setters

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
/* 
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto); */
/* console.log(steven);
steven.name = "steven";
steven.birthYear = 2002;
steven.calcAge();
 */
/* const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1996);
sarah.calcAge(); */

// Starting Coding Challenge #2
// Same as first challenge but with ES6 class

/* class CarCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log('Speed increased by 10 to ', this.speed);
    }
    brake() {
        this.speed -= 5;
        console.log('Speed decreased by 5 to ', this.speed);
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
         this.speed = speed * 1.6;
    }
};

const subaru = new CarCL('Outback', 120);
console.log(subaru); */


const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
    
Person.prototype.calcAge = function() {    
    return 2037 - this.birthYear;
};

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);  // Empty object initially

//const michael = new Person('Michael Thompson', 1970);
//console.log(michael);

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I studied ${this.course}`);
};

const mike = new Student('Mike', 1970, 'Computer Science');
console.log("mike", mike);
mike.introduce();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor); // This almost showed Person and not Student

// Coding challenge #3 - #219
/* 
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);  // Empty object initially
EV.prototype.chargeBattery = function(chargeTo) {  // Then add methods 
    this.charge = chargeTo;
};
EV.prototype.accelerate = function() {  // Then add methods 
    this.speed += 20;
    this.charge--;
    console.log(`The car sped up to ${this.speed} and decreased its charge to ${this.charge}`)
};

EV.prototype.brake = function() {
    this.speed -= 5;
    console.log('Speed decreased by 5 to ', this.speed);
};

console.log(Car.prototype);
console.log(EV.prototype);

const kit = new EV("Kit", 120, 99);
kit.chargeBattery(100);
console.log("kit- ", kit);
kit.brake();
kit.accelerate(); */

class PersonCL {
    constructor(fullName, birthyear){
        this.fullName = fullName;
        this.birthYear = birthyear;
    }

    // Methods will be added to the .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        }
        else console.log("Missing last name");
    }
    get fullName() { return this._fullName }

    // static method
    static hey() {        
        console.log("Hey there!!!!!!!!!!!");
        console.log(this);
    };
};

class StudentCL extends PersonCL {    
    constructor(fullName, birthyear, course){
        super(fullName, birthyear); // First. Creates this keyword
        this.course = course;
    }    
    introduce() {
        console.log(`My name is ${this.fullName} and I studied ${this.course}`);
    }
};

const mikey = new StudentCL('Michael Thompson', 1970, "Computer Science");
//console.log(mikey);
mikey.introduce();
mikey.calcAge();

// Finished lesson 220

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I studied ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');

// Beginning Ecapsulation/Protected Properties lesson

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
    // 1) Public fields
    locale = navigator.language;
    //_movements = [];

    // 2) Private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // protected property
        //this._movements = [];
        //this.locale = navigator.language;

        console.log(`Thanks for opening and account ${owner}`);
    }
    
    // 3) Public methods

    // PUBLIC INTERFACE
    getMovements() {
        return this.#movements;
    };

    deposit(val) {
        this.#movements.push(val);
        return this;
    };

    withdrawal(val) {
        this.deposit(-val);
        return this;
    };

    approveLoan(val) {
        // Various loan criterias
        return true;
    };

    requestLoan(val) {
        if(this.approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved');
        }
        return this;
    };
    // 4) Private methods
    // not available yet



}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// Chaining

acc1.deposit(300).deposit(500).withdrawal(35).requestLoan(25000).withdrawal(4000);

// Coding challenge #4

class CarCl {
    constructor(make, speed) {
    this.make = make;
    this.speed = speed;
    };
};

class EVCl extends CarCl {
    #charge = this.charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }        
    
    chargeBattery(chargeTo) {  // Then add methods 
        this.#charge = chargeTo;
        console.log(`The car was charged to ${this.#charge}`)
        return this;
    };
    accelerate() {  // Then add methods 
        this.speed += 20;
        this.#charge--;
        console.log(`The car sped up to ${this.speed} and decreased its charge to ${this.#charge}`)
        return this;
    };
    brake() {
        this.speed -= 5;
        console.log('Speed decreased by 5 to ', this.speed);
        return this;
    };
};

    //EVCl.prototype = Object.create(CarCl.prototype);  // Empty object initially
   /*  EVCl.prototype.chargeBattery = function(chargeTo) {  // Then add methods 
        this._charge = chargeTo;
    };
    EVCl.prototype.accelerate = function() {  // Then add methods 
        this.speed += 20;
        this._charge--;
        console.log(`The car sped up to ${this.speed} and decreased its charge to ${this._charge}`)
    };

    EVCl.prototype.brake = function() {
    this.speed -= 5;
    console.log('Speed decreased by 5 to ', this.speed);
    }; */
console.log(CarCl.prototype);
console.log(EVCl.prototype);

const kit = new EVCl("Rivian", 120, 25);
console.log(kit.accelerate().accelerate().accelerate().brake().chargeBattery(100).accelerate());




















