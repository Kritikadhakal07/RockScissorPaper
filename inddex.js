
let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0


};
updateScoreElement()


/*   if(!score){
both if work as same
// if(score === null){
//     score ={
//         wins:0,
//         losses:0,
//         ties:0
//     };

// } */

//Keep track if we are playing no not
let isAutoPlaying=false;
let intervalID;



function autoPlay(){
 
    
    if(!isAutoPlaying){
       intervalID = setInterval(()=>{
            const playerMove = pickComputerMove();
            playGame(playerMove);
    
        },1000);
        
       

        isAutoPlaying = true;

    }
    else{

        clearInterval(intervalID);
        isAutoPlaying=false;

    }
   
    
}
function toogle(){
    const buttonElement =document.querySelector('.js-auto-play');

if (buttonElement.innerHTML === 'Auto Play'){
    buttonElement.innerHTML= 'Stop Play';
   
}
else{
    buttonElement.innerHTML= 'Auto Play';
    
}

}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock');
});


document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('scissors');
});

document.querySelector('.js-reset-button').addEventListener('click',()=>{
    conformationmessage();
    //resetScore();

   

    
});

document.querySelector('.js-auto-play').addEventListener('click',()=>{
    toogle();
  autoPlay();

});

document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        playGame('rock');
    

    }
    else if(event.key === 'p'){
        playGame('paper');
    }
    else if(event.key === 's'){
        playGame('scissors');
    }
    else if(event.key === 'a'){
        toogle();
        autoPlay();
    }

        else if(event.key === 'Backspace'){
           // resetScore();
            conformationmessage();
            

            

        }

    


});

function resetScore() {
    


    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  }
  function conformationmessage(){
    document.querySelector('.js-conformation-message').innerHTML=`Are you sure you want to reset the score?
    <button class="js-conform-yes reset-confirm-button">Yes</button>
    <button class="js-conform-no reset-confirm-button">No</button>
    
    
    `;

    document.querySelector('.js-conform-yes').addEventListener('click',()=>{
        // conformationmessage();
        resetScore();
        hideConformation();
    
    });

    document.querySelector('.js-conform-no').addEventListener('click',()=>{
        hideConformation();
    });

    function hideConformation(){
        document.querySelector('.js-conformation-message')
        .innerHTML='';
    }



  }








function playGame(playerMove){
const computerMove= pickComputerMove();
let result='';
if(playerMove ==='scissors'){
if(computerMove=== 'rock'){
result ='You lose';
}
else if(computerMove === 'paper'){
result='You win';
}
else if(computerMove === 'scissors') {
result='Tie';

}
}


else if(playerMove === 'paper'){
if(computerMove=== 'rock'){
result ='You win ';
}
else if(computerMove === 'paper'){
result='Tie';
}
else if(computerMove === 'scissors') {
result='You lose';

}
}


else if(playerMove === 'rock'){
if(computerMove=== 'rock'){
result ='Tie ';
}
else if(computerMove === 'paper'){
result='You lose';
}
else if(computerMove === 'scissors') {
result='You win';

}
}

if(result==='You win'){
score.wins+=1;
}else if(result==='You lose'){
score.losses+=1;

}else if(result==='Tie'){
score.ties+=1;
}

localStorage.setItem('score',JSON.stringify(score));


updateScoreElement();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-move').innerHTML=
`You
<img src="./image/${playerMove}-emoji.png" alt="rock" class="move-icon">
<img src="./image/${computerMove}-emoji.png"
alt="rock" class="move-icon">
Computer`


}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML = `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
}
JSON.parse(localStorage.getItem('score'));





function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = "";
if (randomNumber >= 0 && randomNumber < 1 / 3) {
computerMove = "rock";
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
computerMove = "paper";
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
computerMove = "scissors";
}
return computerMove;
}


