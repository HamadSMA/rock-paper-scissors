"use strict";

let humanPoint = 0;
let humanScore = 0;
let computerPoint = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const msg = document.querySelector(".msg");
const humanPointUI = document.querySelector(".player-point");
const computerPointUI = document.querySelector(".computer-point");
const playerScoreUI = document.querySelector(".player-score");
const computerScoreUI = document.querySelector(".computer-score");
const playerRollUI = document.querySelector(".player-roll");
const computerRollUI = document.querySelector(".computer-roll");

humanPointUI.textContent = humanPoint;
computerPointUI.textContent = computerPoint;
playerScoreUI.textContent = humanScore;
computerScoreUI.textContent = computerScore;

function pointUp(point) {
  if (point === 1 && humanPoint !== 5) {
    humanPoint++;
    humanPointUI.textContent = humanPoint;
  } else if (point === 0 && computerPoint !== 5) {
    computerPoint++;
    computerPointUI.textContent = computerPoint;
  }
}

// generate computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// check who has more points after the a round is finished
function checkWinner(humanPoint, computerPoint) {
  if (humanPoint > computerPoint) {
    msg.textContent = "Congratulation! You win! =>";
    humanScore++;
    playerScoreUI.textContent = humanScore;
  } else if (humanPoint < computerPoint) {
    msg.textContent = "The computer won =<";
    computerScore++;
    computerScoreUI.textContent = computerScore;
  } else {
    msg.textContent = "It's a tie...";
  }
}

// check who gets a point after each play
function checkPoint(humanChoice, computerChoice) {
  let point = 0;
  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    point = 1;
    pointUp(point);
    playerRollUI.textContent = humanChoice;
    computerRollUI.textContent = computerChoice;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    point = 1;
    pointUp(point);
    playerRollUI.textContent = humanChoice;
    computerRollUI.textContent = computerChoice;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    point = 1;
    pointUp(point);
    playerRollUI.textContent = humanChoice;
    computerRollUI.textContent = computerChoice;
  } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
    point = 0;
    pointUp(point);
    playerRollUI.textContent = humanChoice;
    computerRollUI.textContent = computerChoice;
  } else if (computerChoice === "Paper" && humanChoice === "Rock") {
    point = 0;
    pointUp(point);
    playerRollUI.textContent = humanChoice;
    computerRollUI.textContent = computerChoice;
  } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
    point = 0;
    pointUp(point);
    playerRollUI.textContent = humanChoice;
    computerRollUI.textContent = computerChoice;
  } else {
    point = 2;
    playerRollUI.textContent = humanChoice;
    computerRollUI.textContent = computerChoice;
  }
}

let playerChoice = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.className === "rock") {
      playerChoice = "Rock";
    } else if (e.target.className === "paper") {
      playerChoice = "Paper";
    } else if (e.target.className === "scissors") {
      playerChoice = "Scissors";
    }
    if (humanPoint + computerPoint < 5) {
      checkPoint(playerChoice, getComputerChoice());
    } else {
      console.log("total is 5");
      checkWinner(humanPoint, computerPoint);
      humanPoint = 0;
      computerPoint = 0;
      humanPointUI.textContent = humanPoint;
      computerPointUI.textContent = computerPoint;
    }
  });
});
