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

/** Score Keeping Function
 * @param {*} result
 * Result is taken from round and added to winning player's total
 * Once total reaches five on either side then a message is printed showing result 
 */

function scoreKeeper (result) {

    //Accessing the score div and adds style
    const score = document.getElementById('score');
    score.style.display = "flex";
    score.style.justifyContent = "center";
    //Checking for total scores less than 5
    if (playerScore < 5 && computerScore < 5){
        if (result == 1) {
            //if 1, then player's score increases
            playerScore++;
        } else if (result == 0){
            //if 0, then computer's score increases
            computerScore++;
        } 
    }
    if (playerScore == 5) {
        //If player wins, message is displayed and game is ended
        score.textContent = `You win! \n You: ${playerScore} vs. Computer: ${computerScore}`;
        endGame();
        } else if (computerScore == 5) {
            //If computer wins, message is displayed and game is ended
            score.textContent = `Computer wins! \n You: ${playerScore} vs. Computer: ${computerScore}`;
            endGame();
        } else {
            //Otherwise, keep playing and show scores as we
            score.textContent = `You: ${playerScore} vs. Computer: ${computerScore}`;
          }
};

/**
 * Check Result Function
 * @param {*} player 
 * @param {*} computer 
 * @returns 1 if player wins, 0 if computer wins, or -1 if tie
 */
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
    endGame.style.display = "flex";
    endGame.style.justifyContent = "center";
    endGame.textContent = `Game has ended. Please refresh to play again.`; 

};




