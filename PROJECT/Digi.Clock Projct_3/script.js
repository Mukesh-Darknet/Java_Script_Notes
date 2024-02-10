 const clocks = document.getElementById('clock')
//  const clocks = document.querySelector("#clock")

// let date = new Date();
// console.log(date.toLocaleTimeString());


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clocks.innerHTML = date.toLocaleTimeString();
},1000)