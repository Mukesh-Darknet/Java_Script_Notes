// syntax of erroe handling 

// try{
//     statment1
// }
// catch{
//     statment 2
// }
// finally{
//     statment3
// }

//  example
  try{
    console.log('mukesh');
    console.log(a); //this is error so next line conot exicute
    console.log('you can do');
  }
catch(err){
    console.log('thanks ',err);
}
console.log('hello mukesh');
