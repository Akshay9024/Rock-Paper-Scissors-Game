const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const uS=document.querySelector('#user-score');
const cS=document.querySelector('#computer-score');

let userScore = 0;
let compScore=0;

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click',()=>{
        let userChoice = choice.id;
        // console.log(`clicked on ${userChoice}` );
        playGame(userChoice);
    })
})

const drawGame=()=>{
    console.log('Game is now draw');
    msg.innerText = 'Game is Draw. Play Again!';
    msg.style.backgroundColor='#22333b'
}
const playGame=(userChoice)=>{
    console.log(`user choice : ${userChoice}`); //user choice
    const compGen = comp();   //coputer generated
    console.log(`computer choice : ${compGen}`);

    if (userChoice===compGen){
        drawGame();
    }else{
        let userWin =true;
        if (userChoice==='Rock'){
            userWin = compGen=== "Paper"? false:true;
        }else if (userChoice==='Paper'){
            userWin = compGen=== 'Rock'? true:false;
        }else{
            userWin= compGen==='Paper'? true:false;
        }
        showWinner(userWin);
    }
}
 
const showWinner =(userWin)=>{
    if (userWin){
        console.log('User won 🏆');
        userScore++;
        uS.innerText =userScore
        msg.innerText='You won 🏆';
        msg.style.backgroundColor='#7ae582';
    }else{
        console.log('You Lose');
        msg.innerText = 'You Lose';
        compScore++;
        cS.innerText=compScore;
        msg.style.backgroundColor='#a4133c';
    }

}



const comp=()=>{
    const options =['Rock','Paper','Scissors']
    return options[Math.floor(Math.random()*3)];
}


