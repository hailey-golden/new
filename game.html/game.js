let player1Score = 0;
let player2Score = 0;
let round = 0;
let gameEnded = false;

const rollButton = document.getElementById('roll-button');
const player1Dice = document.getElementById('player1-dice');
const player2Dice = document.getElementById('player2-dice');
const player1ScoreElement = document.getElementById('player1-score');
const player2ScoreElement = document.getElementById('player2-score');
const roundResult = document.getElementById('round-result');
const gameResult = document.getElementById('game-result');
const replayButton = document.getElementById('replay-button');
const quitButton = document.getElementById('quit-button');
const endGameActions = document.getElementById('end-game-actions');

rollButton.addEventListener('click', function() {
  if (gameEnded) return;

  // Roll the dice for both players
  const player1Roll = Math.floor(Math.random() * 6) + 1;
  const player2Roll = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  player1Dice.src = `https://www.random.org/dice/dice${player1Roll}.png`;
  player2Dice.src = `https://www.random.org/dice/dice${player2Roll}.png`;

  // Update round result
  if (player1Roll > player2Roll) {
    player1Score++;
    roundResult.textContent = 'Player 1 Wins this Round!';
  } else if (player2Roll > player1Roll) {
    player2Score++;
    roundResult.textContent = 'Player 2 Wins this Round!';
  } else {
    roundResult.textContent = 'It\'s a Tie!';
  }

  // Update scores
  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;

  // Check if the game is over
  round++;
  if (round >= 3) {
    if (player1Score > player2Score) {
      gameResult.textContent = 'Player 1 Wins the Game!';
    } else if (player2Score > player1Score) {
      gameResult.textContent = 'Player 2 Wins the Game!';
    } else {
      gameResult.textContent = 'It\'s a Tie Game!';
    }
    gameEnded = true;
    rollButton.disabled = true;
    endGameActions.style.display = 'block'; // Show Replay and Quit buttons
  }
});

// Replay button functionality
replayButton.addEventListener('click', function() {
  // Reset game variables
  player1Score = 0;
  player2Score = 0;
  round = 0;
  gameEnded = false;

  // Reset UI elements
  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;
  roundResult.textContent = 'Roll the Dice!';
  gameResult.textContent = '';
  player1Dice.src = 'https://www.random.org/dice/dice1.png';
  player2Dice.src = 'https://www.random.org/dice/dice1.png';

  // Hide Replay and Quit buttons
  endGameActions.style.display = 'none';

  // Enable roll button
  rollButton.disabled = false;
});

// Quit button functionality
quitButton.addEventListener('click', function() {
  // Disable roll button and hide Replay/Quit buttons
  rollButton.disabled = true;
  endGameActions.style.display = 'none';
});
