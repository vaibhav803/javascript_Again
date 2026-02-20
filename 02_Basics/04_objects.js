const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "helloyono"
tinderUser.isLoggedIn = true

//spread very important

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:{
                1:"a"
            },
            lastname: {
                2:"b"
            }

        }
    }
}

console.log(regularUser.fullname.userfullname);



const obj3 = {1: "a",2: "b"}
const obj1 = {3: "a",4: "b"}
const obj2 = {5: "a",6: "b"}


// const obj = Object.assign({},obj1,obj2,obj3)

// console.log(obj);

// const obj = {...obj1,...obj2,...obj3}
// console.log(obj);

const obj = [
    {1: "a",2: "b"},
    {user: "a",4: "b"},
    {5: "a",6: "b"}
]

// console.log(obj[1].user);

console.log(tinderUser.hasOwnProperty('id'));








console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // key value as individual array
