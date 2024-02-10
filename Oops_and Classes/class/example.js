class user {
    constructor(name ,email,address){
        this.name = name;
        this.email = email;
        this.address = address;
    }
    viewData(){
        console.log("Data is secret information");
    }
}
let student1 = new user("Mukesh","yada@gmial.com","ghazipur");
let teacher = new user("DEan","yada@gmial.com","ghazipur");

