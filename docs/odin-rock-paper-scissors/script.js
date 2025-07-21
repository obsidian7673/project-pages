let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
      break;
  }

  return choice;
}

let getHumanChoice = () => prompt("What do you want to throw?").toLowerCase();

let computerScore, humanScore = 0;

let playRound = (humanChoice, computerChoice) => {
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return handleResult("tie", humanChoice, computerChoice);
        case "paper":
          return handleResult("lose", humanChoice, computerChoice);
        case "scissors":
          return handleResult("win", humanChoice, computerChoice);
      }
    case "paper":
      switch (computerChoice) {
        case "rock":
          return handleResult("win", humanChoice, computerChoice);
        case "paper":
          return handleResult("tie", humanChoice, computerChoice);
        case "scissors":
          return handleResult("lose", humanChoice, computerChoice);
      }
    case "scissors":
      switch (computerChoice) {
        case "rock":
          return handleResult("lose", humanChoice, computerChoice);
        case "paper":
          return handleResult("win", humanChoice, computerChoice);
        case "scissors":
          return handleResult("tie", humanChoice, computerChoice);
      }
  }
}

let handleResult = (result, humanChoice, computerChoice) => {
  switch (result) {
    case "win":
      humanScore++;
      return `you win! ${humanChoice} beats ${computerChoice}`;
    case "lose":
      computerScore++;
      return `you lose! ${humanChoice} loses to ${computerChoice}`;
    case "tie":
      return `tie! ${humanChoice} ties ${computerChoice}`;
  }
}

let playGame = () => {
  for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
    console.log(`round: ${roundNumber}`);
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }
}

playGame()