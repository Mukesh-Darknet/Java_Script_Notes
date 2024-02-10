//   Object Literal

const user_one = {
    name: 'Mukesh',
    userName: "Radhe Radhe",
    user_id: 'my123@gmail.com',
    mob: 98545678,
    add: "Ghazipur",
    sign: true,

    detailed: function () {
        console.log("got detailed from Data BAse");
        console.log(`userNAme:${this.userName}`);
        console.log(this);
    }
}
console.log(user_one.name);
console.log(user_one.detailed());
console.log(this);



// **********Constructor
// Example--
// const date = new Date
// const promises = new Promise()
// in above example 'new' is Called constructor


function UserOne( username , login , logout ){
    this.user = username
    this.login = login
    this.logout = logout
    return this

}
const user_One  = new UserOne("mukesh",123,true)
const user_two = new UserOne("Nikesh", 879,false)
console.log(user_One)
console.log(user_two)