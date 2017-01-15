/**
 * Objects 201:
 * 
 * 'this' allows us to reference ourselves
 * 
 */

let person = {
    name: 'Dabo',
    isHealthy: true,
    food: 100,
    eat: function () {
        console.log(this.name + ' is eating');
        this.food = this.food - 10;
    },
    status: function () {
        // 'this' is a context variable
        if (this.food < 0) {
            console.log(this.name + ' is sick with ' + this.food + ' food')
        } else {
            console.log(this.name + ' is healthy with ' + this.food + ' food')
        }
    },
};

let second = {
    name: 'Brent',
    isHealthy: true,
    food: 140,
};

/* 
In oo (object oriented) dev, we want to grop things based
on the object they're related to.

Instead of this, add it to the person object */
function eat() {
}

person.eat();
// 'Jeb is healthy with 100 food'
// 'Jeb is sick with 100 food'
person.status();
let stat = person.status;
// 'this' refers to the object the the fucntion was called on 
//                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^
stat();

second.status = stat;
second.status();

/**
 * A constructor is  function w/ a few special features
 * 
 * 1. We call it using 'new' keword
 * 2. By convention, constructor names are the only capitalized function names
 * 3. 'this' is set to new object -- the thing being constructed
 * 4. 'return' happens automatically (Luke doesn't like this though)
 * 5. The new object's prototype is set to Traveler. prototype
 */
function Traveler(name) {
    this.name = name;
    this.food = 100;
    this.happiness = 60;

    this.eat = function () {
        console.log(this.name + ' nom nom')
        this.food = this.food - 10
    }
    return this; //technically optional
}

let cfb = [
    new Traveler('Dabo'),
    new Traveler('Brent'),
    new Traveler('Jeff Scott'),
]
console.log(cfb);

cfb[2].eat(); // Jeff Scott's eat function

// let adventurer = new Traveler('Dabo')
// let adventurer2 = new Traveler('Brent')
// console.log(adventurer.name)
// console.log(adventurer2.name)

function Wagon() {
    this.capacity = 5;
    this.passengers = []; //who is in the wagon?
    this.add = function (traveler) {
        if (this.passengers.length < this.capacity) {
            this.passengers.push(traveler);
        }
    };
    this.count = function () { // return # of passengers
        return this.passengers.length;
    };
    this.food = function () { // return # of food in wagon
        let stockpile = 0;
        for (let i = 0; i < this.passengers.length; i++) {
            stockpile = stockpile + this.passengers[i].food;
        };
        return stockpile;
    };
    return this;
}

let catBus = new Wagon();
for (let i = 0; i < cfb.length; i++) {
    catBus.add(cfb[i]);
}
console.log('wagon contains ' + catBus.count() +
    'people with ' + catBus.food() + ' food');
