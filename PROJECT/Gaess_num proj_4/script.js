// console.log(parseInt(Math.random()*100 +1));


let random_number = parseInt(Math.random() * 100 +1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultparas');



const p =document.createElement('p');

let preGuess  = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click' ,function(e){
     e.preventDefault();
     const guess =parseInt(userInput.value);
     console.log(guess);
     validateguess(guess);
    })
}


function validateguess (guess){
    if(isNaN(guess)){
        alert('please inter valid number');
    }else if(guess<1){
        alert('enter the number more than 1');
    }
    else if(guess>100){
        alert('enter the number less than 100')
    }
    else{
        preGuess.push(guess)
        if(numGuess===11){
            displayguess(guess)
            displayMessage(`Game Over.random number was${random_number}`)
            endGame();

        }else{
            displayguess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess===random_number){
        displayMessage('you guess is right')
        endGame()

    }
    else if(guess < random_number){
        displayMessage('number is too low');
    }
    else if(guess > random_number){
        displayMessage('number is too high');
    }

}




function displayguess(guess){
    userInput.value='';
    guessslot.innerHTML+=`${guess}   `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
  
}

function display(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function  newGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">start new game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();


}

function endGame(){
    const newGamebutton = document.querySelector('newGame');
    newGamebutton.addEventListener('click',function(e){
        random_number= parseInt(Math.random() * 100 +1);
        preGuess=[]
        numGuess=1
        guessslot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true
    })


}