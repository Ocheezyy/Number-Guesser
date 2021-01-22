let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below
function generateTarget(){
  return Math.floor(Math.random(0, 9))
}

function compareGuesses(humanGuess, cpuGuess, targetNum){
  let diffs = getAbsoluteDistance(humanGuess, cpuGuess, targetNum);
  let humanDiff = diffs[0];
  let cpuDiff = diffs[1];

  if (cpuDiff < humanDiff){
    return false;
  }
  else {
    return true;
  }
}

function updateScore(winner){
  if (winner == 'human'){
    humanScore++;
  }
  else {
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber++;
}

function getAbsoluteDistance(humanGuess, cpuGuess, target){
    let humanDiff = Math.abs(humanGuess - target);
    let cpuDiff = Math.abs(cpuGuess - target);

    return humanDiff, cpuDiff;
}