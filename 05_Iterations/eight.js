const mynums = [8,6,7]
const intv = 10
const total = mynums.reduce((acc,cur) => acc+cur,intv)


// console.log(total);


const myTotal = mynums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "programming",
        price: 3000
    },
    {
        itemName: "data scientist",
        price: 4000
    }
]

let tot = 0
const shopping = shoppingCart.forEach((red) => tot += red.price)

console.log(tot);
