const userEmail = "h@hitesh.ai"

// if (userEmail){
//     console.log("GOt user email");
    
// }else{
//     console.log("Did not get user email");
    
// }

//falsy values

// 0, null , -0, false, Bigint 0n, undefined, "" , NaN


//Truthy values

// 1, [] , "H", true, {}, "0",'false'," ", function(){} // since they are inside string



// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
    


//Nullish coalescing Operator (??) : null undefined


let val1;
val1 = 5 ?? 10
let val2 = null ?? 10
var1 = undefined ?? 15
val1 = null ?? 10 ?? 20


//Ternary operator

// pattern of ternary condition ? true : false


// console.log(2 < 1 ? true : false)
let iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("nope");

