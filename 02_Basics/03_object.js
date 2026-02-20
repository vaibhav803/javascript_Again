//singleton

// object literals

const mySym = Symbol("key1")


//Object.create() // constructor method and gives singleton
const Jsuser = {
    "full name": "iain mcg",
    [mySym] : "hello",
    name: "Hitesh",
    age: 18,
    email: "h@k.com",
    location: "jaipur",
    Isloggedin: false,
    lastLoginDays: ["mon","tues"]
}

// console.log(Jsuser.email);
// console.log(Jsuser[mySym]);


Jsuser.greeting = function(){
    console.log("Hello JS User");
    
}

Jsuser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}


console.log(Jsuser.greeting);

console.log(Jsuser.greeting2());



