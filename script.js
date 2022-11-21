let playerScore = 0;
let computerScore = 0;
const result = document.querySelector(".result");
const modal = document.querySelector(".modal");
const playerPoints = document.querySelector(".playerPoints");
const computerPoints = document.querySelector(".computerPoints");
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

  if (
    (playerChoice === "rock" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "rock")
  ) {
    computerPoints.innerHTML += `<p>Computer Wins! ${computerSelection} beats ${playerChoice}</p>`;
    return computerScore++;
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    playerPoints.innerHTML += `<p> You Win! ${playerChoice} beats ${computerSelection}</p>`;
    return playerScore++;
  } else if (playerChoice === computerSelection) {
    playerPoints.innerHTML += "<p>Draw</p>";
  } else {
    playerPoints.innerText += "<p>invalid value</p>";
  }
}
function playAgain() {
  const playAgainBtn = document.querySelector(".play-again-btn");
  playAgainBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    modal.classList.toggle("hidden");
    game();
  });
}
function showScore(playerScore, computerScore) {
  const playerCounter = document.querySelector(".playerCounter");
  const computerCounter = document.querySelector(".computerCounter");
  playerCounter.textContent = `Your Points : ${playerScore}`;
  computerCounter.textContent = `Computer Points : ${computerScore}`;
  if (playerScore === 5) {
    modal.classList.toggle("hidden");
    return (result.innerHTML += "<p>Congratulations, You Won!</p>");
  }
  if (computerScore === 5) {
    modal.classList.toggle("hidden");

    return (result.innerHTML += "You've lost. Better luck next time!");
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
      showScore(playerScore, computerScore);
      playAgain();
    });
  });
}
game();
