// Dates


let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date("01-14-2023")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()


// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// let newDate = new Date()
// console.log(newDate);


// console.log(Math.floor(myTimeStamp));


let newDate = new Date()
// console.log(newDate.getMonth()+1);

const date = newDate.toLocaleString('default',{
    weekday: "long",
    month: "long",
    year: "numeric"
})


console.log(date);











