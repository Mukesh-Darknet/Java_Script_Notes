//  ********** array with foreach function 

let arr=[1,2,3,4,5]
arr.forEach(function(element,index,arr){
    // console.log(element,index,arr);
    // console.log(element,index);
})


//    arrow function
arr.forEach((element,index) => {
    // console.log('my',index,element);

})

const str=['mukesh','manish','himnshu']
str.forEach((element) => {
    // console.log(element.toLocaleUpperCase());
})


//    M A P function

const arr2=[1,2,3,4,5]
arr2.map(function(element){
    // console.log(element,arr2);
})

arr2.map((element )=>{
    // console.log(element,arr2);
})


// filter
const hero=['raviraj','maniraj','hulk','ironman','mukeraj']
const herowithraj= hero.filter((h)=>{
    return h.endsWith('raj')
})
// console.log(hero);
// console.log(herowithraj);


const scores=[1,6,2,3,4,5,6,'k']
const checktype=scores.every((score)=>typeof score==='number'

)
// console.log(checktype);
// find score moe than 200
const above200 =scores.find((score) => score>1)
console.log(above200);