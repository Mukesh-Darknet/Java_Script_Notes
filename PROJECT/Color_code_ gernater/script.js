const button=document.getElementById('btn')
const colortext=document.querySelector('.color')
let hex=['0','1','2','3','5','6','7','8','9','A','B','C','D','E','F']


button.addEventListener('click',() =>{
    // alert('clicked')
    const hexColor=generatehexcolor();
    document.body.style.backgroundColor=hexColor
    colortext.textContent=hexColor
})

// function to generate the hexcolor
const generatehexcolor = ()=> {
    let hexColor='#';
    for(let i=0;i<6;i++){
        hexColor+=hex[generateRandomNumber()]
    }
    // alert(hexColor)
    return hexColor
}
const generateRandomNumber =()=>{
    return Math.floor(Math.random()*hex.length)
}