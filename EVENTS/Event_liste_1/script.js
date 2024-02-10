//****First Aproch of Event Listener

// document.getElementById('one').onclick = function(){
//     alert('Happy New Year')
// }


// ***Second Aproach   is Best Aproach
// type, timestamp ,defaultPrevented 
// targfet , toElement, srcElement,currentTarget
// clientX , clientY, screenX ,screenY --for interview
// altkey , ctrlkey, keycode

// ***Second Aproach   is Best Aproach


// document.getElementById('image').addEventListener('click',function(e){
//    console.log("cliked outside");

// },false)

// document.getElementById('three').addEventListener('click',function(e){
//    console.log("clicked inside");
//    e.stopPropagation()
//    e.preventDefault

// },false)


// *******Write a programe to hide the image when it is clicked

document.querySelector('#image').addEventListener("click",function(e){
   console.log(e.target.tagName);
   
   if(e.target.tagName === "IMG"){
      console.log(e.target.id);
      let removeIt =e.target
      removeIt.remove()

   }
   // let removeIt =e.target
   // removeIt.remove()

})