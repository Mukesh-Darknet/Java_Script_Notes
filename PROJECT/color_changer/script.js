 const button = document.getElementById('btn')
 const randomcolor= () => {
    let val='0123456789ABCDEF'
    let cons='#'
    for(let i =0;i<6;i++){
        cons=cons+val[Math.floor(Math.random() *16)];
    }
    return cons

 };
//  console.log(randomnum);

function changecolor(){
     document.body.style.backgroundColor=randomcolor()

}
button.addEventListener('click',changecolor)