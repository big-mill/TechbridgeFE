const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = `It's a tie! You both chose ${playerChoice}.`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win this round! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
  } else {
    result = `You lose this round! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
  }

  roundsPlayed++;
  document.getElementById("round-result").textContent = result;
  document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (roundsPlayed === 3) {
    let finalResult = "";
    if (playerScore > computerScore) {
      finalResult = "Congratulations! You won the game";
    } else if (playerScore < computerScore) {
      finalResult = " You lost the game";
    } else {
      finalResult = "It's a tie!";
    }
    document.getElementById("final-result").textContent = finalResult;
    // Reset the game
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
  }
}