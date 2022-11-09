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
// getComputerChoice();
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  if (player === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (player === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (player === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (player === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (player === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (player === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (player === computerSelection) {
    return "Draw";
  } else {
    return "invalid value";
  }
}

let playerSelection = prompt("Enter a value (Rock ,Paper,Scissors)");

console.log(playRound(playerSelection, getComputerChoice()));
