let userScore = 0;
let computerScore = 0;
let isGameActive = false;

const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");
const choicesBtns = document.querySelectorAll(".choice-btn");

function setChoicesBtn(enabled){
    choicesBtns.forEach(btn => btn.disabled = !enabled);
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
     const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(user,computer){
    if(user===computer) return "draw";

    if((user==='rock' && computer === 'scissors') ||
    (user==='paper' && computer === 'rock') ||
    (user==='scissors' && computer === 'paper')
    ){
        return "user";
    }
    else{
        return "computer";
    }
}

function updateSelection(user,computer){
    document.getElementById("user-choice").textContent = user;
    document.getElementById("computer-choice").textContent = computer;
}

function updateScore(winner){
    if(winner ==="user") userScore++;
    if(winner ==="computer") computerScore++;

    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function endGame(winner){
    isGameActive = false;
    setChoicesBtn(false);
    resetBtn.disabled = false;
    alert(`${winner} win the game!`)
}
choicesBtns.forEach(button => {
    button.addEventListener("click", () =>{
        if(!isGameActive) return;

        const userChoice = button.id;
        const computerChoice = getComputerChoice();

        updateSelection(userChoice, computerChoice);

        const winner = getWinner(userChoice, computerChoice);
        updateScore(winner);

        if(userScore === 5) endGame("You");
        if(computerScore === 5) endGame("Computer");
    });
});

playBtn.addEventListener("click", () =>{
    isGameActive = true;
    playBtn.disabled = true;
    resetBtn.disabled = true;
    setChoicesBtn(true);
});

resetBtn.addEventListener("click", () =>{
    userScore = 0;
    computerScore = 0;
    isGameActive = false;

    document.getElementById("user-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;
    document.getElementById("user-choice").textContent = "—";
    document.getElementById("computer-choice").textContent = "—";

    playBtn.disabled = false;
    resetBtn.disabled = true;
    setChoicesBtn(false);
})