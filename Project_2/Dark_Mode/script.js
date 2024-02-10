// let price = [100,200,150,300,350,500];

// let i=0;
// for(let item of price){
//     let offer = item/10;
//     price[i] = price[i]- offer
//     console.log(`the price after the offer 10% is ${price[i]}`);
//     i++;
// }
// console.log(price);

// alert("You cannot open this site")


//     Gqme

//  let gamenum = 123
//  let usernum = prompt("Gause the  the number");
//  while(usernum!=gamenum){
//     usernum = prompt("You Enter the Wrong number  Enter again")
//  }
//  console.log("Congratulations  You won the game");
 
 


// let arr = [12,3,4,645,23,5,322,66,44];

//  let myfilter = arr.filter((val) => {
//    // return val % 2===0
//    return val >12

// })
// console.log(myfilter);


//   Events 

// *****Inline Event Handling
//    Example

/* <button onclick="console.log('button was clickd'); alert('HEllo mukesh')">click me</button>

<div class="box" onmouseover="console.log('you are under box');">
    Good morning
</div> */


//  **** Node Event 
// let btn =document.querySelector('.btn');

// btn.onclick = () =>{
//   console.log("you click on button");
//   btn.style. backgroundColor= 'green'
// }

//  let box = document.querySelector('.box');
//  box.onclick= () =>{
//   console.log('you click on biox');
//   box.style.backgroundColor= 'green'
//   box.style.height='100px'
//   box .style.width='100px'
//   box.style.borderRadius='50%'
//   box.innerText= 'Mukesh'
// } 



// ****Add Event Listerner

//  let adbtn = document.querySelector('.btn');
//  adbtn.addEventListener('click' ,() =>{
//   console.log("Hello Mukesh");
//   adbtn.style.backgroundColor= 'green'
//  })
// *******Project  (Dark Mode And Light Mode)

let mode = document.querySelector('.btn');

let current_Mode = "Light"

mode.addEventListener('click', () =>{

  if(current_Mode === "Light"){

    current_Mode = "dark";
    document.querySelector('.body').style.backgroundColor= 'black'
    console.log("Dark mode");

  }
  else{
    
    current_Mode = "Light"
    document.querySelector('.body').style.backgroundColor= 'white'

  }
  console.log(current_Mode);
 
})