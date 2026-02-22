const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")


console.log(Math.PI);



const obj = Object.create(null)


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai wrecked");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai, 'name', {writable: false,
//     enumerable: false
// })

for (let [key,val] of Object.entries(chai)) {
    if (typeof val != 'function'){
        console.log(key,val);
    }
    
    
}