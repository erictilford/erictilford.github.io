document.addEventListener('DOMContentLoaded', () => {
  const COLS = 7;
  const ROWS = 6;
  const boardEl = document.getElementById('board');
  const statusEl = document.getElementById('status');
  const restartBtn = document.getElementById('restart');
  const undoBtn = document.getElementById('undo');

  let board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  let current = 'red';
  let winner = null;
  const history = [];

  const directions = [
    { r: 0, c: 1 },
    { r: 1, c: 0 },
    { r: 1, c: 1 },
    { r: 1, c: -1 }
  ];

  function createBoard() {
    boardEl.innerHTML = '';
    for (let col = 0; col < COLS; col++) {
      const column = document.createElement('div');
      column.className = 'column';
      column.dataset.col = col;
      for (let row = 0; row < ROWS; row++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.dataset.row = row;
        slot.dataset.col = col;
        column.appendChild(slot);
      }
      boardEl.appendChild(column);
    }
  }

  function render() {
    document.querySelectorAll('.slot').forEach((slot) => {
      const row = Number(slot.dataset.row);
      const col = Number(slot.dataset.col);
      const value = board[row][col];
      slot.classList.toggle('red', value === 'red');
      slot.classList.toggle('yellow', value === 'yellow');
    });
    if (winner) {
      statusEl.textContent = winner === 'draw' ? "It's a draw" : `${capitalize(winner)} wins!`;
    } else {
      statusEl.textContent = `${capitalize(current)}'s turn`;
    }
  }

  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function dropDisc(col) {
    if (winner) return;
    const row = [...board].reverse().findIndex((rowArr) => rowArr[col] === null);
    if (row === -1) return;
    const actualRow = ROWS - 1 - row;
    board[actualRow][col] = current;
    history.push({ row: actualRow, col, player: current });
    winner = checkWinner(actualRow, col);
    if (!winner) current = current === 'red' ? 'yellow' : 'red';
    render();
  }

  function checkWinner(row, col) {
    const player = board[row][col];
    for (const dir of directions) {
      let count = 1;
      count += countMatches(row, col, dir.r, dir.c, player);
      count += countMatches(row, col, -dir.r, -dir.c, player);
      if (count >= 4) return player;
    }
    if (board.every((rowArr) => rowArr.every(Boolean))) return 'draw';
    return null;
  }

  function countMatches(row, col, dr, dc, player) {
    let r = row + dr;
    let c = col + dc;
    let count = 0;
    while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === player) {
      count += 1;
      r += dr;
      c += dc;
    }
    return count;
  }

  function undo() {
    if (history.length === 0 || winner) return;
    const last = history.pop();
    board[last.row][last.col] = null;
    current = last.player;
    winner = null;
    render();
  }

  function restart() {
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    current = 'red';
    winner = null;
    history.length = 0;
    render();
  }

  boardEl.addEventListener('click', (event) => {
    const column = event.target.closest('.column');
    if (!column) return;
    dropDisc(Number(column.dataset.col));
  });

  restartBtn.addEventListener('click', restart);
  undoBtn.addEventListener('click', undo);

  createBoard();
  render();
});
