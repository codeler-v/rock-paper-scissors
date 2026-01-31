console.log('Hello, World!');
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const num = Math.random();
    if(num > .66){
        return 'Rock';
    }else if(num < .33){
        return 'Paper';
    }else{
        return 'Scissors';
    }
}

function getHumanChoice(roundNum){
    const humanChoice = prompt(`Round ${roundNum} \n Enter a letter : \n R-Rock \n P-Paper \n S-Scissors`);
    switch(humanChoice.toUpperCase()){
        case 'R':
            return 'Rock';
            break;
        case 'P':
            return 'Paper';
            break;
        case 'S':
            return 'Scissor';
            break;
    }
}
function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        return 'Draw';
    };

    if(
        (humanChoice==='Rock' && computerChoice==='Scissors') ||
        (humanChoice==='Scissors' && computerChoice==='Paper') ||
        (humanChoice==='Paper' && computerChoice==='Rock')
    ){
        return humanScore++;
    }else{
        return computerScore++;
    }
}

function playGame(){
    for (i=1;i<=5;i++){
        const humanSelection = getHumanChoice(i);
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    };
    if (humanScore > computerScore){
        alert(`You win!. \n Your Score:${humanScore} vs Computer: ${computerScore}` );
    }else if (humanScore < computerScore){
        alert(`You lose. \n Your Score:${humanScore} vs Computer: ${computerScore}` );
    }else{
        alert(`It's a draw. \n Your Score:${humanScore} vs Computer: ${computerScore}`)
    }
}

playGame();