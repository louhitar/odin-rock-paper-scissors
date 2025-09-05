let userScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("Tie! Rock matches rock.");
                break;
            case "paper":
                console.log("You lose... Rock is beat by paper.");
                break;
            case "scissors":
                console.log("You win! Rock beats scissors.");
                break;
        }
    } else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You win! Paper beats rock.");
                break;
            case "paper":
                console.log("Tie! Paper matches paper.");
                break;
            case "scissors":
                console.log("You lose... Paper is beat by scissors");
                break;
        }
    } else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("You lose... Scissors are beat by rock.");
                break;
            case "paper":
                console.log("You win! Scissors beat paper.");
                break;
            case "scissors":
                console.log("Tie! Scissors match scissors.");
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
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    // Prompt user for humanChoice
    let humanChoice = prompt("Enter Rock, Paper, or Scissors");
    return humanChoice.toLowerCase();
}
