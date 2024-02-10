let arr=[1,2]
console.log(arr);

// we add array to gien original array by concat() function
console.log(arr.concat([3,4]));
console.log(arr.concat([4,3],[8,6]));

// indexing of an array
let myarr=[10,20,30,false]
console.log(myarr.indexOf(10));
console.log(myarr.indexOf(false));
console.log(myarr.indexOf(100));

// indexing in form of true or false
console.log(myarr.includes(10));
console.log(myarr.includes(30));
console.log(myarr.includes(40));
console.log(myarr.includes(100));