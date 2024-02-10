const powertwo =  (n) => {
    return n**2
}
// console.log(powertwo(2));

function powercube(powertwo,n){
    return powertwo(n)*n

}
// console.log(powercube(powertwo,3));


function sayhello(){
    return ()=>{
        console.log('thanks mukesh');
    }
}
let say=sayhello()
// console.log(say);


// **** function inside function
const highfun = n =>{
    const onefun = m =>{
        const twofun = p =>{
            return n+m+p
        }
        return twofun
    }
    return onefun
}
// console.log(highfun(1)(3)(4));



const num=[1,2,3,4,5]

const sumarry = arr => {
    let total = 0;
    arr.forEach(function(element) {
        total=total+element
        
    });
    return total;
}
// console.log(sumarry(num));



 function wish(){
    console.log('Hii Mukesh',Math.random());
}
setInterval(wish,1200)
setTimeout(wish,1000)
