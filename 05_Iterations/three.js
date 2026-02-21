//for of

["","",""]

[{}, {}, {}]


const arr = [1,2,3,4,5]

// for (const value of arr) {
//     console.log(value);
    
// }

// const greeting = "Hello world!"
// for( const greet of greeting){
//     console.log(greet);
    
// }

// Maps 


const map = new Map()

map.set('in',"india")
map.set('esp',"spain")
map.set('rsa',"russia")

// console.log(map);

//Remembers order and unique


for (const [key,value] of map) {
    console.log(key, ':-',value);
    
}


const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'

}

// for (const element of myObject) {
    
// } 

//for of doesnot work on object as well as for in