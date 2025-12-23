
objects : singalton
// objects  literals

const mySym  = Symbol("myKey1")

const user = {
    name : "Samir", 
    "full name " : "Samir Wankhede" , 
    age : 20 , 
    email : "samir@google.com",
    [mySym] : "keySymbol" , 
    isLoggedIn : true , 
    lastLogInDays : ["Sunday" , "Tuesday"]
}

// console.log(user);
// console.log(user.name);
// console.log(user["full name "]);
// console.log(user[mySym]);
// console.log( typeof mySym);

user.email = "samir@microsoft.com"
console.log(user["email"]);

// after freeze we cant able to do modifications/ anything// Object.freeze(user)

user.email = "samir@amazon.com"
console.log(user);


user.greeting = function () {
    console.log("Hello User");
    
}

user.greetingTwo = function () {
    console.log(`hello ,${user.name}`)
}

console.log(user.greeting());
console.log(user.greetingTwo());








