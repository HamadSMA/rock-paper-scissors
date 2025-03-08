"use strict";

let humanScore = 0;
let computerScore = 0;

function choiceFunc(number) {
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  return choiceFunc(randomNumber);
}

function getHumanChoice() {
  let choice = Number(
    prompt(`Type a number
        Rock: 1
        Paper: 2
        Scissors: 3`)
  );
  return choiceFunc(choice);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You win! Rock beats scissors");
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You win! Scissors beat paper");
    humanScore++;
  } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
    console.log("You lose ): Scissors lose to rock");
    computerScore++;
  } else if (computerChoice === "Paper" && humanChoice === "Rock") {
    console.log("You lose ): Rock loses to paper");
    computerScore++;
  } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
    console.log("You lose ): Paper loses scissors");
    computerScore++;
  } else {
    console.log("It's a tie.");
  }
}
