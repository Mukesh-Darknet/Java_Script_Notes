// ******* important for interview

// Falsy value--  false  ,0 ,-0,BigInt 0n, null, undefine,NaN

// Truthy value-- '0'  , 'false', ' ', [ ] ,function(){}



// const user=[1,1]
// const user1=[]
// if(user.length===0){
//     console.log("this is true");
// }else{
//     console.log('this is false');
// }


// const emptyobj={a:1};
// if(Object.keys(emptyobj).length===0){
//     console.log('Object is empty');
// }else{
//     console.log('object is not empty');
// }



//       Nullish Coalescing Operater( ??): null undefine

let val1;
// val1=12 ?? 13;
// val1 =  null ?? 10
// val1=undefined ?? 12
// val1=null ?? 10 ??20

console.log(val1);



//        Ternary Operater
// condition ? true :false

const price=1002;
price>=200 ? console.log("less than 200"): console.log('more than 200');

