// Immediately Invoked Function Expression (IIFE)



// to protect from global scope pollution
(function chai(){
    console.log(`DB CONNECTED`); // named IIFE
    
})(); // BECUASE IT RUNS BUT IT DOESNOT KNOW ITS ENDING CONTEXT


((name)=>{
    console.log(`hello ${name}`); // unamed iife
    
})('juan')