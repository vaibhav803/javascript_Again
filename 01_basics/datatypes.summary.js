//Primtive

//Boolean , null, undefined, String, number, symbol , bigInt




// Non primitive by reference


const id = Symbol('123')
const myid = Symbol('123')

console.log(id == myid);


// Function, array, object



const heroes = ["shaktiman","naagraj","doga"]


let myobj = {
    name: "mine",
    age: 22,
}

const hello  = function(){
    console.log("Hello world");
    
}


console.log(typeof heroes);
