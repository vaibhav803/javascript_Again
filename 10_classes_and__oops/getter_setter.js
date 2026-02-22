class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
        //write the property as name for getter and setter
    }

    set email(val) {
        this._email = val
    }
    get password(){
        return `${this._password}hitesh`
    }
    set password(val){
        this._password = val
    }
}

const hitesh = new User("h@hitesh.ai","123")
console.log(hitesh.password);
