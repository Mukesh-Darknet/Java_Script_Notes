





const discrip = Object.getOwnPropertyDescriptors(Math, 'PI');
// console.log(discrip);


const  user = {
    name   : "mukesh yadav",
    email: "yadav@gmila.com",
    passward:"12345t"
}
const descr = Object.getOwnPropertyDescriptor(user, 'name')
console.log(descr);

Object.defineProperty(user ,'name' ,{
    writable: false,       
    enumerable: false,
    configurable: false 

})


console.log(Object.getOwnPropertyDescriptor(user, 'name'));


 

