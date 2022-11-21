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
  const playerChoice = playerSelection.toLowerCase().trim();
  const result = document.querySelector(".result");

  if (
    (playerChoice === "rock" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "rock")
  ) {
    result.innerHTML += `<p>You Lose! ${computerSelection} beats ${playerChoice}</p>`;
    return computerScore++;
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    result.innerHTML += `<p>You Win! ${playerChoice} beats ${computerSelection}</p>`;
    return playerScore++;
  } else if (playerChoice === computerSelection) {
    result.innerHTML += "<p>Draw</p>";
  } else {
    result.innerText += "<p>invalid value</p>";
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
  const buttons = document.querySelectorAll("button");
  let imgs = document.querySelectorAll("img");
  imgs = Array.from(imgs);
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let playerSelection;
      if (e.target === btn) {
        const targetNode = e.target;
        playerSelection = targetNode.getAttribute("data-id");
      } else if (imgs.includes(e.target)) {
        const targetNode = e.target.parentNode;
        playerSelection = targetNode.getAttribute("data-id");
      }
      playRound(playerSelection, getComputerChoice());
    });
  });

  decideWinner(playerScore, computerScore);
}
game();
