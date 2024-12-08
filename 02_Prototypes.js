/*

*/

function createuser(username, password) {
    this.username = username;
    this.password = password;
}

// prototype to change username of the user on which it is called
createuser.prototype.changeUsername = function(newUsername) {
    this.username = newUsername;
}

// prototype that prints username and password of user on which it is called
createuser.prototype.getDetails = function() {
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);
}

// prints the prototypes that are available to use on createUser
console.log(createuser.prototype);

// creating users
const user1 = new createuser("satyam123", "1234");
const user2 = new createuser("sunil123", "5678");

// printing users before any changes
user1.getDetails();
user2.getDetails();

user1.changeUsername("satyam");
user2.changeUsername("sunil");

// printing users after changes were made
user1.getDetails();
user2.getDetails();



const obj1 = {
    fname: "satyam",
    age: 21,
}

console.log(obj1)

const obj2 = Object.create(obj1);

// const obj2 = {
//     __proto__: obj1
// }

obj2.__proto__.fname = "sunil";

console.log(obj1.fname)


// let fname = "satyam";
let fname = new String("satyam");
console.log(fname)

// in classes
class Myclass {
    constructor(fname) {
        this.fname = fname;
    }

    greet() {
        console.log(`Hello ${this.fname}`);
    }
}

const o1 = new Myclass("Satyam");  // o1 is an instance of Myclass
const o2 = new Myclass("Sunil");

o1.greet();
o2.greet();


// in prototypes
protoObj = {
    greet() {
        console.log(`Hello ${this.fname}`);
    }
}

const o3 = Object.create(protoObj);
const o4 = Object.create(protoObj);

o3.fname = "satyam";
o4.fname = "sunil";

o3.greet();
o4.greet();

class Animal {
    eat() {
        console.log("I am eating!");
    }
}

// Dog class inherits properties and methods of Animal class
class Dog extends Animal {
    bark() {
        console.log("bhow-bhow!!");
    }
}

// instance of Animal class
const ani = new Animal();
ani.eat();  // it can access eat() but not bark()

// instance of Dog class
const bullDog = new Dog();
bullDog.eat();
bullDog.bark();  // it can access methods of its parent class as well as it's own methods