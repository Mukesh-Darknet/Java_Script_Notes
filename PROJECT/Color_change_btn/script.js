// Generate a random color code

const randomColor = function(){
    const hexCl = '0123456789ABCDEF';
    let  color = '#'
    for(let i=0 ;i<6; i++){
        color +=  hexCl[Math.floor(Math.random()*16)]

    };
    return color;
}

// console.log(randomColor());

let stopInterval ;
const StartChange = function(){
//    stop =  setInterval(changeBgcolor ,1000)  
//          or we can USE
if(!stopInterval){
    stopInterval = setInterval(changeBgcolor ,1000)  
}

    function changeBgcolor(){
        document.body.style.backgroundColor=randomColor();
    }
}



 const Stopchange = function(){
    clearInterval(stopInterval)
    stopInterval = null;
    // console.log("stopppp");
 }

document.querySelector('#strt').addEventListener('click',StartChange)
document.querySelector('#stp').addEventListener('click' ,Stopchange)