
// ***********Introduction to array

//  we can creat array by followig method
let arr1=[1,2,3,4,56,6,3]
// console.log(arr1);

let arr2=new Array(1,2,3,4,5,6,6);
// console.log(arr2);


// to creat a empty array
let arr = new Array(5)
// console.log(arr);
 
//  push() = fuctionto add  element  in  last of array
// pop() = function to remove element from last position
// unshift()= function to add at first posotion
// shift() = to remove from first

arr1.push(1)
arr1.push(1)
arr1.push(1)
arr1.push(1)
console.log(arr1);

arr2.pop()
arr2.pop()
arr2.pop()
// console.log(arr2);


arr1.unshift(100)
arr1.unshift(200)
// console.log(arr1);



arr1.shift()
arr1.shift()
arr1.shift()
// console.log(arr1);


// ******** Adding two array
//  push()
// concat()


let a=[1,2,3,4,5]
let b=[6,7,8,0,9]

// a.push(b)
// console.log(a);

const c=a.concat(b);
// console.log(c);

// we can use simple method

let d=[...a,...b]
// console.log(d);


// let array=[1,2,3,4,[5,6,7,8],900,[1,2,3],[0,9,8]]
// let narray=array.flat(Infinity)
// console.log(narray);


// **** important question for interview
//  splice()
// slice()


const myarr=(1,23,34,23,53465)
// console.log(myarr.splice());







