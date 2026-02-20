//Primtive

//Boolean , null, undefined, String, number, symbol , bigInt




// Non primitive by reference


const id = Symbol('123')
const myid = Symbol('123')

// console.log(id == myid);


// Function, array, object



const heroes = ["shaktiman","naagraj","doga"]


let myobj = {
    name: "mine",
    age: 22,
}

const hello  = function(){
    console.log("Hello world");
    
}


// console.log(typeof heroes);


//++++++++++++++++++++++++++++++++++++++++++


//Stack, Heap

// Stack(Primitive), Heap(Non-Primitive)


let myYoutubeName = "hiteshtcom"

let myname = myYoutubeName



console.log(myYoutubeName);

console.log(myname);


let userOne = {
    email :"h@g.com",
    upi : "us@ybl"
}


let userTwo = userOne


userTwo.email = "2"


// console.log(userOne);

// console.log(userTwo);



