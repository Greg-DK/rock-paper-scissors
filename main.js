// Rock paper scissors game for TOP

!/javascript


let choices = ["rock", "paper", "scissors"]

function getComputerChoice
    // use a random function to iterate 0-3 and index choices

    return computerChoice

function getPlayerChoice
    // provide an input box to choice rock, paper or scissors
    // make the input case insensitive (run a string.lower on the result)
    prompt
    return playerChoice

function playRound(computerChoice, playerChoice)
    //compare computerChoice to playerChoice using elif statements
    

    console.log("You lose this round. $computerChoice beats $playerChoice")
    console.log("You win this round! $playerChoice beats $computerChoice")
    return roundResult


function playGame()
    //play a best of 5 rounds and console.log the result
    for (let i = 0, i < 5; i++) {
      playRound
      if roundResult === computerWon {
        computerWins += 1
      }
      elif roundResult === playerWon {
        playerWins += 1
      }
      console.log("Computer: $computerWins You: $playerWins")
    }
    
    console.log("Final Result: You Won! $playerWins to $computerWins")
    console.log("Final Result: You lose. $computerWins to $playerWins")