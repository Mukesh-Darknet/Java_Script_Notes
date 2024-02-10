//*****    Creation  of Object
let user=new Object()
user.name='mukesh'
user.id='BCS202206'
user.course='B.tech'
user.year=2
user.loged=false

//  console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));



// *********** chai aur code 4....
//   Object inside  a Object
let user1={
    name:'mukesh',
    email:'yadav@gmail.com',
    more:{
        mob:12352324,
        add:'India',
        code:233227,
    job:{
        compnay:'google',
        salary:121233,
        place:"USA"
    }    
    }
}
// console.log(user1);
// console.log(user1.email);
// console.log(user1.more);
// console.log(user1.more.code)
// console.log(user1.more);
// console.log(user1.more.job);




//*******  Combination  of two object

let obj1={4:'d',3:'c',6:'f'}
let obj2={1:'a',5:'e',2:'b'}

let obj3=Object.assign({},obj1,obj2)
// or
let obj4={...obj1 , ...obj2}

// console.log(obj4);
// console.log(obj3);


// *******  soting the object in a array[]
let myuser=[
    {
        id:123,
        name:'mukesh',
        email:"muk@gmail.com"
    },
    {
        id:10001,
        name:'manish',
        email:"mani@gmail.com"
    }
]
// console.log(myuser);
// console.log(myuser[0]);
// console.log(myuser[0].email);
// console.log(Object.keys(myuser[0]));




// ***** de-structure of object


const course={
    name:'mukesh',
    email:'abc.com',
    teach:"hitesh"
}
course.courseInstructer
const{teach}='course'
console.log(teach);
console.log(course);