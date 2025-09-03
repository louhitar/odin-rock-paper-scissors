// SET variable computerChoice to ""
let computerChoice = getComputerChoice();

function getComputerChoice() {
    // Generate a random number of 0, 1, or 2
    let randomNum = Math.floor(Math.random() * 3);
    // Assign randomNum rock/paper/scissors based on generated number
    let decision = "";
    switch (randomNum) {
        case 0:
            decision = "Rock";
            break;
        case 1:
            decision = "Paper";
            break;
        case 2:
            decision = "Scissors";
            break;
    }
    return decision;
}
