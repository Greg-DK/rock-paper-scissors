// Rock paper scissors game for TOP

let choices = ["rock", "paper", "scissors"]

let roundsPlayed = 0;
let pwins = document.getElementById("pwins");
let cwins = document.getElementById("cwins");
let roundResult;

const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const result = document.getElementById('result');


let computerWins = 0;
let playerWins = 0;
pwins.innerText = playerWins;
cwins.innerText = computerWins;

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
console.log(roundResult)
    


function getComputerChoice() {
    // use a random function to iterate 0-3 and index choices
    let randomNumber = Math.floor((Math.random()) * choices.length);
    let computerChoice = choices[randomNumber];
    return computerChoice;
}

function playRound(button) {
    //compare computerChoice to playerChoice using if statements
    let computerChoice = getComputerChoice();
    let playerChoice = button.target.id;
    let roundResult;
    let choice = document.getElementById('choice');
    let output = document.getElementById('output');
    choice.innerText = "You chose " + playerChoice;
    result.innerText = ''
    if (computerChoice === playerChoice) {
        roundResult = "draw";
        output.innerText = ("This round is a draw.");
    }
    if (computerChoice === choices[0] && playerChoice === choices[1]) {
        roundResult = "win";
        output.innerText = ("You win this round! " + playerChoice + " beats " + computerChoice + ".");
    }
    if (computerChoice === choices[0] && playerChoice === choices[2]) {
        roundResult = "lose"
        output.innerText = ("You lose this round. " + computerChoice + " beats " + playerChoice+ ".")
    }
    if (computerChoice === choices[1] && playerChoice === choices[2]) {
        roundResult = "win"
        output.innerText = ("You win this round! " + playerChoice + " beats " + computerChoice + ".")
    }
    if (computerChoice === choices[1] && playerChoice === choices[0]) {
        roundResult = "lose"
        output.innerText = ("You lose this round. " + computerChoice + " beats " + playerChoice+ ".")
    }
    if (computerChoice === choices[2] && playerChoice === choices[0]) {
        roundResult = "win"
        output.innerText = ("You win this round! " + playerChoice + " beats " + computerChoice + ".")
    }
    if (computerChoice === choices[2] && playerChoice === choices[1]) {
        roundResult = "lose"
        output.innerText = ("You lose this round. " + computerChoice + " beats " + playerChoice+ ".")
    }

    console.log(roundResult)
    if (roundResult === "lose") {
        computerWins = ++computerWins;
        cwins.innerText = computerWins;
    }

    if (roundResult === "win") {
        playerWins = ++playerWins;
        pwins.innerText = playerWins;
    }

    if (computerWins === 5) {
        result.innerText = ("Final Result: You lose. " + computerWins + " to " +playerWins)
        resetGame();
    }
    
    if (playerWins === 5) {
        result.innerText = ("Final Result: You Won! " + playerWins +" to " + computerWins)
        resetGame();
    }
    return roundResult
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    output.innerText = "Reset for the next game.";
    pwins.innerText = playerWins;
    cwins.innerText = computerWins; 
}