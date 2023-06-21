/* getComputerChoice function
 * Randomly chooses a number between 0 and 2
 * Then selects the corresponding move
 * Returns computer's move as a string
 */
 
function getComputerChoice () {

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    let num = (Math.floor(Math.random()* 3));
    
    if(num == 0){
        return rock;
    } else if (num == 1){
        return paper;
    } else if (num == 2){
        return scissors;
    };
};

//To test getComputerChoice
// console.log(getComputerChoice());

/* playRound() function
 * This function will play a single round
 * It takes two parameters: playerSelection and computerSelection
 * Returns a string that indicates the winner of the round
 */
function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    let playerWins = "You win!";
    let computerWins = "Computer wins!";

    if (player == "rock" && computer == "scissors") {
        return `${playerWins} Rock Beats Scissors.`;
    } else if (player == "paper" && computer == "rock") {
        return `${playerWins} Paper Beats Rock.`;
    } else if (player == "scissors" && computer == "paper") {
        return `${playerWins} Scissors Beats Paper.`;
    } else {
        return `${computerWins} Rock Beats Paper.`;
    };

};

console.log(playRound("rock", getComputerChoice()));

