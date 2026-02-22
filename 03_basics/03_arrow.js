const user = {
    username: "hitesh",
    price: 999,

    welcome: function() {
        console.log(`${this.username}`);
        console.log(this);
        
        
    }
}

// user.welcome()

// console.log(this);


// function chai(){
//     let user = "hitman"
//     console.log(this.user);
    
// }



const chai = () => {
    let user = "hitman"
    console.log(this);
}

chai()

//implicit return


// const addTwo = (n1,n2) => (n1 + n2)

const addTwo = (n1,n2) => ({a: "b"})

console.log((addTwo(1,2)))
//if paranthesis no return but if used  curly braces then use return 