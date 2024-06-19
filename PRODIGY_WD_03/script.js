const gameBoard = document.getElementById('game-board');
const cells = document.querySelectorAll('.cell');
const gameStatusEl = document.getElementById('game-status');
const resetBtn = document.getElementById('reset-btn');

let currentPlayer = 'X';
let gameWon = false;
let gameBoardArray = new Array(9).fill(null);

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (!gameWon &&!gameBoardArray[index]) {
      gameBoardArray[index] = currentPlayer;
      cell.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === 'X'? 'O' : 'X';
    }
  });
});

resetBtn.addEventListener('click', () => {
  gameWon = false;
  currentPlayer = 'X';
  gameBoardArray = new Array(9).fill(null);
  cells.forEach((cell) => {
    cell.textContent = '';
  });
  gameStatusEl.textContent = 'Game in progress...';
});

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    if (
      gameBoardArray[condition[0]] &&
      gameBoardArray[condition[0]] === gameBoardArray[condition[1]] &&
      gameBoardArray[condition[0]] === gameBoardArray[condition[2]]
    ) {
      gameWon = true;
      gameStatusEl.textContent = `Player ${gameBoardArray[condition[0]]} wins!`;
      return;
    }
  }

  if (!gameBoardArray.includes(null)) {
    gameStatusEl.textContent = 'It\'s a draw!';
  }
}