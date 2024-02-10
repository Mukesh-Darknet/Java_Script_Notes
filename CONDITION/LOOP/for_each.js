//   for each loop

// array.forEach(element => {
    
// });

const coding=['js','cpp','c','ruby','python'];

// *****from normal function
// coding.forEach( function (item) {
//     console.log(item);


// })

// *****From arrow function
// coding.forEach( item => {
//     console.log(item);

// })


// coding.forEach(   (item,index,arr) =>{
//     console.log(item,index,arr);

// })



// const num=[1,2,3,4,5,6,7,7]
// num.forEach( item =>{
//     console.log(item);
// })


// we can also do like this
// const name = ['Mukesh','Manish','Himanshu','Ayush'];
// function printme(item){
//     console.log(item);
// }
// name.forEach(printme)




const list = [
    {
        brand:'samsung',
        price:1234,
        name:'flip12',
        ver:'3g'
    },
    {
        brand:'Nokia',
        price:10874,
        name:'handset',
        ver:'5g'
    },
    {
        brand:'Apple',
        price:87564,
        name:'macpro',
        ver:'7g'
    }
]
list.forEach(  (index) => {
    console.log(index.price);
} )