


// function add2number(n1,n2) { // this is parameter
//     console.log(n1+n2);
    
// }


function add2number(n1,n2) { // this is parameter
    let result = n1 + n2
    return result
    return n1+n2 // unreachable
    console.log("hitesh"); // unreachable
    
    
}


// const result = add2number(3,4) // this is argument

// console.log(result);



function loginUserMessage(username="hello") {
    if(!username){
        console.log("please give username");
        return
        
    }
    return `${username} just logged in `

}


console.log(loginUserMessage()) // reference call pass argument


function calculateCartPrice(val1, val2 , ...num1) {
    return num1
}


// () parahte
// {} curly braces
// [] brackets

// console.log(calculateCartPrice(2,4,5))


const User = {
    username: "hitesh",
    price: 199
}


function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject({
    username: "shum",
    price: 399
})


const myNewArray = [200,400,2,1000]

function returnSecondValue(arr){
    return arr[2]
}

console.log(returnSecondValue([22,222,222,2223]));
