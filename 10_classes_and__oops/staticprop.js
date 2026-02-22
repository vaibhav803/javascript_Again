class User {
    constructor(username){
        this.username = username
    }

    static logMe(){
        console.log(`Username: ${this.username}`);
        
    }
}


//static will not make me use the method

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

