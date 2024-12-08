/* 
    Read -> https://www.notion.so/OOP-15404dedbc5e800d95f4e91fc7c6e513
    1. Object v/s Instances
*/


// OOP : it is a programming paradigm that revolves around classes and objects
// objects are collection of properties (constants or variables) and methods (functions)

const username = "yoyo";

const user = {
    // properties
    username: "sataym",
    loginCount: 8,
    signedIn: true,

    // methods
    // getUserDetails: () => {
    //     console.log(`Username: ${username}`);  // this will point to the global scope and print the username if declared, if not, then it will throw reference error
    //     console.log(`Username: ${this.username}`);  // Arrow functions do not bind their own 'this', so whenever we have to use 'this' we should use regular functions
    // }
    
    getUserDetails: function() {
        console.log(`Username: ${username}`); 
        console.log(`Username: ${this.username}`); 
        console.log(this);  // this mtlb current context, toh ye object ko print krega
    }
}

console.log(user.username);
user.getUserDetails();

// constructor functions : a constructor function is used to create objects and it is written to initialize an object using 'this' keyword, and called with 'new' keyword
// whereas, the purpose of a regular function is to execute reusable logic, not to construct anything, it is not called with 'new' keyword, although we can use it but it doesn't make any sense to use it because the function doesn't construct anything meaningful
// constructor function and regular function ko define krne me koi difference nahi aata, usecase alg hota hai (C.F used to create instances whereas R.F used to make the code reusable, it doesn't construct anything), but unko thoda sa easily differentiate krne ke liye, hum C.F ka first letter Capital me likhte hai 
// c.f likh rahe hai toh User hoga naam (convention) naaki user
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const userOne = new User("satyam", 12, true);
const userTwo = new User("sunil", 3, false);
const instance = new Object();

// we can print instances
console.log(userOne);
console.log(userTwo);

// we can also check if they are really instances of User
console.log(userOne instanceof User);  //true
console.log(userTwo instanceof User);  //true
console.log(instance instanceof Object);  //true
console.log(instance instanceof User);  //false