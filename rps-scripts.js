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

    if (player == "rock" && computer == "scissors") {
        return 1;
    } else if (player == "paper" && computer == "rock") {
        return 1;
    } else if (player == "scissors" && computer == "paper") {
        return 1;
    } else if (player == computer) {
        return "tie";
    } else {
        return 0;
    };

};

//To test playRound function
// console.log(playRound("rock", getComputerChoice()));

/* game() function
 * playRound() is used inside this function
 * Get user input for the player's move
 * Play five rounds and keep track of who wins
 * Display the winner at the end of five rounds
 */
function game() {

    let playerTotal = 0;
    let computerTotal = 0;

    for (let i=0; i<5; i++){
        //Get Player's Selection
        let playerSelection = prompt("Rock, paper, or scissors?");
        console.log("You played: " + playerSelection);
        //Get Computer's Selection
        let computerSelection = getComputerChoice();
        console.log("Computer played: " + computerSelection); 
        //Play a round and store result
        let result = playRound(playerSelection, computerSelection);

        //Store results in tally
        if (result == 1){
            playerTotal = playerTotal + 1;
        } else {
            computerTotal = computerTotal + 1;
        }  
    }

    //Check totals
    if (playerTotal > computerTotal) {
        //Player wins
        console.log(`You win! ${playerTotal} vs. ${computerTotal}`);
    } else {
        //Computer wins
        console.log(`Computer wins. ${computerTotal} vs. ${playerTotal}`)
    }
};

game();