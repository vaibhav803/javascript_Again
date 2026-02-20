const marvel_heroes = ["thor","lord ragnarok","spiderman"]
const dc_heroes = ["superman","batman","flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);


// const heroes = marvel_heroes.concat(dc_heroes)

// console.log(heroes);

const all_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_heroes);


const anotherArray = [1,2,3,[4,5,6],7,[8,9,10],[[4,5],6]]

const realAnotherArray = anotherArray.flat(2)

// console.log(realAnotherArray);

// console.log(Array.isArray("hitesh"))
// console.log(Array.from("hitesh"));

console.log(Array.from({name:"hitesh"})); // interesting 


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));






