//Score variables
let playerScore = 0;
let computerScore = 0;

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
    
    let result = checkResult(player, computer);
    scoreKeeper(result);

};

function scoreKeeper (result) {

    const score = document.getElementById('score');
    if (result == 1) {
        playerScore++;
    } else if (result == 0){
        computerScore++;
    } else if (result == -1) {
        score.textContent = `Tie Round. \n You: ${playerScore} vs. Computer: ${computerScore}`;
    }
    if (playerScore > 5 || computerScore > 5) {
       `You: ${playerScore} vs. Computer: ${computerScore}`;
        endGame();
    } else if (playerScore == 5) {
    score.textContent = `You win! \n You: ${playerScore} vs. Computer: ${computerScore}`;
    } else if (computerScore == 5) {
    `Computer wins! \n score.textContent = You: ${playerScore} vs. Computer: ${computerScore}`;
    } else {
    score.textContent = `You: ${playerScore} vs. Computer: ${computerScore}`;
      }
};

function checkResult (player, computer){
    if (player == "rock" && computer == "scissors") {
        return 1;
    } else if (player == "paper" && computer == "rock") {
        
        return 1;
    } else if (player == "scissors" && computer == "paper") {
        return 1;
    } else if (player == computer) {
        return -1;
    } else {
        return 0;
    };
};


//Buttons to Play a Round
//Rock Button
const rock = document.getElementById('rock');
rock.addEventListener('click', () => (playRound('rock')));
//Paper Button
const paper = document.getElementById('paper');
paper.addEventListener('click', () => (playRound('paper')));
//Scissors Button
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => (playRound('scissors')));

//End of Game
function endGame () {

    const endGame = document.getElementById('endgame');
    endGame.textContent = `Game has ended. Please play again.`; 

};




