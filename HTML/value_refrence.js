// herewe learn pass by value
// it is use only for primitive data type

// let name='Mukesh';
// let nam=name;
// name='Manish';
// console.log(nam);
// console.log(name);
// console.log(nam==name);

// let num1=100;
// let num2=num1;
// num1=300;
// console.log(num2);
// console.log(num1);
// console.log(num1==num2);




// pass by refreence 
// it is only use for (non primitive data type)  object  set map


// pass by refrence in Object

// let user={
//     name:'Mukesh',
//     age:20,

// }
// let newuser=user;
// console.log(newuser);
// // console.log(user.name);
// user.name='Himanshu';
// user.age=40
// console.log(newuser);
// console.log(user);
// //  console.log(user.name);


// pass by refrence in Array
let arr1=[1,2,3,4,5];
let arr2=arr1;
arr2[3]=100;
console.log(arr1);
console.log(arr2);

