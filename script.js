let userScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
    if (humanChoice = "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("Tie!");
                break;
            case "paper":
                console.log("You lose...");
                break;
            case "scissors":
                console.log("You win!");
                break;
        }
    } else if (humanChoice = "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You win!");
                break;
            case "paper":
                console.log("Tie!");
                break;
            case "scissors":
                console.log("You lose...");
                break;
        }
    } else if (humanChoice = "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("You lose...");
                break;
            case "paper":
                console.log("You win!");
                break;
            case "scissors":
                console.log("Tie!");
                break;
        }
    } else {
        console.log("I don't understand");
    }
}

function getComputerChoice() {
    // Generate a random number of 0, 1, or 2
    let randomNum = Math.floor(Math.random() * 3);
    // Assign randomNum rock/paper/scissors based on generated number
    let computerChoice = "";
    switch (randomNum) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    // Prompt user for humanChoice
    let humanChoice = prompt("Enter Rock, Paper, or Scissors");
    return humanChoice;
}
