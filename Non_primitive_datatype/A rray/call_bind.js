// Call Apply And Bind Method 


// function printname(name){
//     console.log('hi ${name}');
// }
// printname.city='Delhi';
// printname("john");
// console.log(printname.city);
const user1={
    name:"mukesh",
    greeting: function(){
        console.log('hello, ${this.name}')
    }
}
user1.greeting()