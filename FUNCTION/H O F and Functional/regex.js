//  to creat a regex expression 
let pattern ='mu'
let regexone= new RegExp(pattern)

let flag='gi'
let regextwo= new RegExp(pattern ,flag)


// shortcut
const regexthree=/mu/gi

const checkstr='mukesh is mukes good boy mukesh is bad boymukesnjhdhdhjfnm     '
const result=regexthree.test(checkstr)
// console.log(result);
const result2=checkstr.match(regextwo)
// console.log(result2);

const result3=checkstr.replace(regexthree,'RA')
// console.log(result3);


//   important to use regex
// to learn more-- regexorg.com

const myural="htttp://google.com/mukesh%208yadav"
const result4=myural.replace(/%\d\d\d/,'-')
console.log(result4);

