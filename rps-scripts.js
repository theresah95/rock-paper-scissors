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
function playRound (playerSelection) {

    let computerSelection = getComputerChoice();
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == "rock" && computer == "scissors") {
        return console.log("You win!");
    } else if (player == "paper" && computer == "rock") {
        return console.log("You win!");
    } else if (player == "scissors" && computer == "paper") {
        return console.log("You win!");
    } else if (player == computer) {
        return console.log("Tie");
    } else {
        return console.log("Computer Wins!");
    };

};

//Buttons to Play a Round
//Rock Button
const rock = document.getElementById('rock');
rock.addEventListener('click', () => playRound('rock'));
//Paper Button
const paper = document.getElementById('paper');
paper.addEventListener('click', () => playRound('paper'));
//Scissors Button
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => playRound('scissors'));


/*
//To test playRound function
// console.log(playRound("rock", getComputerChoice()));

function playGame(){
    //Get Player's Selection
    let playerSelection = prompt("Rock, paper, or scissors?");
    //console.log("You played: " + playerSelection);
    //Get Computer's Selection
    let computerSelection = getComputerChoice();
    //console.log("Computer played: " + computerSelection); 
    //Play a round and store result
    let result = playRound(playerSelection, computerSelection);
    //Return result
    return console.log(result);
};

playGame();

*/

/* game() function
 * playRound() is used inside this function
 * Get user input for the player's move
 * Play five rounds and keep track of who wins
 * Display the winner at the end of five rounds
 */
/*function game() {

    let playerTotal = 0;
    let computerTotal = 0;

    for (let i=0; i<5; i++){
        let result = playGame();
       //Store results in tally
        if (result == 1){
            playerTotal = playerTotal + 1;
        } else if (result == 0) {
            computerTotal = computerTotal + 1;
        }
    }

    //Check totals
    if (playerTotal > computerTotal) {
        //Player wins
        console.log(`You win! ${playerTotal} vs. ${computerTotal}`);
    } else if (computerTotal > playerTotal){
        //Computer wins
        console.log(`Computer wins. ${computerTotal} vs. ${playerTotal}`);
    } else {
        console.log(`Tie Game! ${playerTotal} vs. ${computerTotal}`);
    }
};

game();

*/