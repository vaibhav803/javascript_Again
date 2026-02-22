class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){

    }
}

const chai = new Teacher("chai","ch@d.com","123")

chai.addCourse()
chai.logMe()

//instanceOf

