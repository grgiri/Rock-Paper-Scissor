let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return 'rock'
    } else if (choice == 1) {
        return 'paper'
    } else {
        return 'scissor'
    }
}


function playRound(humanChoice) {

    console.log("function call reached playRound");

    if (humanScore === 5 || computerScore === 5) return;

    const computerChoice = getComputerChoice();

    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            roundResult.textContent =  'Game is Tied! both played Rock';            

        } else if (computerChoice == 'paper') {
            computerScore += 1;
            roundResult.textContent = 'You Lose! Paper beats Rock';
        } else {
            humanScore += 1;
            roundResult.textContent = 'You Win! Rock beats Scissor';
        }
    } else if (humanChoice == 'scissor') {
        if (computerChoice == 'paper') {
            humanScore += 1;
            roundResult.textContent = 'You Win! Scissor beats Paper';
        } else if (computerChoice == 'rock') {
            computerScore += 1;
            roundResult.textContent = 'You Lose!, Rock beats Scissor';
        } else {
            roundResult.textContent = 'Game Tied!';
        }
    } else {
        if (computerChoice == 'rock') {
            humanScore += 1;
            roundResult.textContent = 'You Win!, Paper beats Rock';
        } else if (computerChoice == 'scissor') {
            computerScore += 1;
            roundResult.textContent = 'You Lose! Scissor beats Paper';
        } else {
            roundResult.textContent = 'Game Tied!';
        }
    }
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if(humanScore === 5 ) {
        game.textContent = " You won the game!!!"
        disableButtons();
    } else if (computerScore === 5) {
        game.textContent = " Computer won the game!!!"
        disableButtons();
    }

}

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
    playRound('rock');
});

const btnScissor = document.querySelector('#btnScissor');
btnRock.addEventListener('click', () => {
    playRound('scissor');
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
    playRound('paper');
});

const roundResult = document.getElementById("roundResult");
const score = document.getElementById("score");
const game = document.getElementById("game-result");




