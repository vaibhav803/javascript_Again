//this in global context gives window object
//In node it gives empty


function SetUsername(username){
    
    this.username = username
    console.log("called");
    
}


function CreateUser(username, email, password){
    SetUsername.call(this , username)          //context issue
    this.email = email
    this.password = password
}


const chai = new CreateUser("chai","chai@fb.com","123")
console.log(chai);
