"use strict";

function choiceFunc(number) {
  if (number == 1) {
    return "Rock";
  } else if (number == 2) {
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
