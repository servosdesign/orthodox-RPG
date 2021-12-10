const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(ROCK + ", " + PAPER + " or " + SCISSORS + "?" ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      alert(`Invalid choice! We chose ${ROCK} for you!`);
      return;
    } 
    return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  }else if (randomValue < 0.67){
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice){
    return RESULT_DRAW;
  } else if (
    cChoice === ROCK && pChoice === PAPER || 
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK
    ){
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice(); 
  const computerSelection = getComputerChoice();
  let winner; 
  if (playerSelection){
   winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }
  let message =`You picked: ${playerSelection || DEFAULT_USER_CHOICE}, Computer picked: ${computerSelection}, therefore you `;
  if (winner === RESULT_DRAW){
    message = message + "had a draw.";
  } else if (winner === RESULT_PLAYER_WINS){
    message = message + "won.";
  } else {
    message = message + "lost.";
  }
  alert(message);
  gameIsRunning = false;
});