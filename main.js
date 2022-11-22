// Rock paper scissors game for TOP

let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    // use a random function to iterate 0-3 and index choices
    let randomNumber = Math.floor((Math.random()) * choices.length);
    let computerChoice = choices[randomNumber];
    return computerChoice
}

function getPlayerChoice() {
    // provide an input box to choice rock, paper or scissors
    // make the input case insensitive (run a string.lower on the result)
    let playerChoice = prompt('Enter your choice:', "rock");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice
}

function playRound() {
    //compare computerChoice to playerChoice using if statements
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let roundResult
    if (computerChoice === playerChoice) {
        roundResult = "draw"
        console.log("This round is a draw.")
    }
    if (computerChoice === choices[0] && playerChoice === choices[1]) {
        roundResult = "win"
        console.log("You win this round! " + playerChoice + " beats " + computerChoice + ".")
    }
    if (computerChoice === choices[0] && playerChoice === choices[2]) {
        roundResult = "lose"
        console.log("You lose this round. " + computerChoice + " beats " + playerChoice+ ".")
    }
    if (computerChoice === choices[1] && playerChoice === choices[2]) {
        roundResult = "win"
        console.log("You win this round! " + playerChoice + " beats " + computerChoice + ".")
    }
    if (computerChoice === choices[1] && playerChoice === choices[0]) {
        roundResult = "lose"
        console.log("You lose this round. " + computerChoice + " beats " + playerChoice+ ".")
    }
    if (computerChoice === choices[2] && playerChoice === choices[0]) {
        roundResult = "win"
        console.log("You win this round! " + playerChoice + " beats " + computerChoice + ".")
    }
    if (computerChoice === choices[2] && playerChoice === choices[1]) {
        roundResult = "lose"
        console.log("You lose this round. " + computerChoice + " beats " + playerChoice+ ".")
    }
    return roundResult
}


function game() {
    //play a best of 5 rounds and console.log the result
    let computerWins = 0
    let playerWins = 0
    let roundsPlayed = 0
    for (;roundsPlayed<5;) {
      let roundResult = playRound() 
      if (roundResult === "lose") {
        computerWins += 1; 
        roundsPlayed += 1;
      }
      if (roundResult === "win") {
        playerWins += 1;
        roundsPlayed += 1;
      }
      
      console.log("Computer: " + computerWins + " You: " + playerWins)
    }
    if (computerWins > playerWins) {
      console.log("Final Result: You lose. " + computerWins + " to " +playerWins)
    }
    if (computerWins === playerWins) {
      console.log("Final Result: It's a draw!")
    }
    if (computerWins < playerWins) {
      console.log("Final Result: You Won! " + playerWins +" to " + computerWins)
    }
  }

  game()
    