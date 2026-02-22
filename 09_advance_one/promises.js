// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, cryptography, network calls
//     setTimeout(function() {
//         console.log("Hello");
//         resolve()
//     },1000)
// })





// promiseOne.then(function(){
//   console.log("Promiseone consumed")  
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             username: "Chai",email:"raven@ck.com"
//         })
//     },2000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    

// })


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({
                username: "hitesh", password: "123"
            }) }else{
                reject('Error ')

        }
    },1000)
})


promiseFour
.then((user) => {
      return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(err){
    console.log(err);
    
}).finally(() => console.log("The promise is either resolved or reject"))


const promiseFive = new Promise(function(resolve,reject){
    let error = true
        if (!error){
            resolve({
                username: "hitesh", password: "123"
            }) }else{
                reject('Error ')

        }
    },1000)


async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
    
}

// async function consumePromiseFive(){
//     const response = await      // Promise is a object
// 

consumePromiseFive()





// async function getAllUsers(){
//     try{
//     const response = await fetch('https://api.github.com/users/vaibhav803')
//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log(error);
        
//     }
    
// }


// async function getAllUsers(){
//     try{
//     const response = await fetch('https://api.github.com/users/vaibhav803')
//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log(error);
        
//     }
    
// }

// getAllUsers()


fetch("https://api.github.com/users/vaibhav803")
.then((response) => {
    return response.json()
}).then((final) => {
    console.log(final);
    
})
.catch((err) => {
    console.log(err);
    
})