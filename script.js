let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase().trim();
  if (
    (playerChoice === "rock" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "rock")
  ) {
    console.log(`You Lose! ${computerSelection} beats ${playerChoice}`);
    return computerScore++;
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You Win! ${playerChoice} beats ${computerSelection}`);
    return playerScore++;
  } else if (playerChoice === computerSelection) {
    console.log("Draw");
  } else {
    console.log("invalid value");
  }
}

function decideWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("Congratulations, You Won!");
  } else if (playerScore < computerScore) {
    console.log("You've lost. Better luck next time!");
  } else if (computerScore === playerScore) {
    console.log("It's a Draw!");
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter a value (Rock,Paper,Scissors)");
    playRound(playerSelection, getComputerChoice());
    console.log(`${playerScore} ${i}`, `${computerScore}`);
  }
  decideWinner(playerScore, computerScore);
}
game();
