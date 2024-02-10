// class user{
//     constructor(username, email, passward){
//         this.username = username;
//         this.email = email;
//         this.passward =passward
//     }
//     encrupePassward(){
//         return `${this.passward}abc`;
//     }
//     changeUser(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const User = new user("mukesh" ,"myada@gmail.com",123);
// console.log(User.encrupePassward());
// console.log(User.changeUser());



// Behind the Scene  What is happen


function user(username,email,passward){
    this.username = username;
    this.email = email;
    this.passward =passward

}
user.prototype.encrupePassward = function(){
    return `${this.passward}abc`;

}
user.prototype.changeUser= function(){
    return `${this.username.toUpperCase()}`

}
const User = new user("mukesh" ,"myada@gmail.com",123);

console.log(User.encrupePassward());
console.log(User.changeUser());