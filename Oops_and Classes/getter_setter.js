class User {
    constructor(email, passward){
        this.email = email;
        this.passward = passward;
    }
    get passward(){
        return this._passward.toUpperCase()
    }
    set passward(value){
        this._passward = value.toUpperCase()
    }
}

const mukesh = new User("mukesh@gmail.com", 1234)
console.log(mukesh.passward);