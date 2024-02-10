class user{
    constructor(Username){
        this.Username = Username
    }
    login(){
        console.log(`UserName is${this.user}`);
    }
}


class Teacher extends user{

    constructor(Username, email ,passward){
        super(Username)
        this.email = email
        this.passward = passward
    }
    addCource(){
        console.log(`the new cource is added by ${this.Username}`);
    }

}

const profile = new  Teacher("Mukesh" , "myadav@gmail.com" , 12334);
profile.addCource()