// ********* Basic of function   (4:37hr)

//  creating a function
function myname(){
    console.log('mukesh yadav');
    console.log("you are bad boy");
}
// Calling a function

// myname()

function addition(num1,num2){
    c=num1+num2;
    console.log(c)
   
}
// addition(12,120)


function loginuser(user){

    return '${user} first you login brother'

}

// console.log(loginuser('mukesh'));
// console.log(loginuser());


//  function for calculatin price of object
// ... is rest operator
function calculateprice( value1,value2, ...num1){
    return num1

}
// console.log(calculateprice(12,12,13));



//  function and   object
const user = {
    name:'mukesh',
    id:'bcs230',
    mob:123123
}
 function handleobject(anyobject){
    console.log(`User name is ${anyobject.name} 
    and youe id is  ${anyobject.mob}`);
 }
handleobject(user)
