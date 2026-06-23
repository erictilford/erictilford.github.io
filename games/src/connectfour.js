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

  const DROP_SPEED_MS = 800;
  const directions = [
    { r: 0, c: 1 },
    { r: 1, c: 0 },
    { r: 1, c: 1 },
    { r: 1, c: -1 }
  ];

  const DISC_INSET = 0.12;
  let isDropping = false;

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
    if (winner || isDropping) return;
    const row = [...board].reverse().findIndex((rowArr) => rowArr[col] === null);
    if (row === -1) return;
    const actualRow = ROWS - 1 - row;
    animateDrop(actualRow, col, current);
  }

  function animateDrop(row, col, player) {
    isDropping = true;
    const columnEl = boardEl.querySelector(`.column[data-col="${col}"]`);
    const targetSlot = columnEl.querySelector(`.slot[data-row="${row}"]`);
    const boardRect = boardEl.getBoundingClientRect();
    const slotRect = targetSlot.getBoundingClientRect();
    const pieceSize = slotRect.width * (1 - 2 * DISC_INSET);
    const drop = document.createElement('div');
    drop.className = `drop-disc ${player}`;
    drop.style.width = `${pieceSize}px`;
    drop.style.height = `${pieceSize}px`;
    drop.style.left = `${slotRect.left - boardRect.left + slotRect.width * DISC_INSET}px`;
    drop.style.top = `0px`;
    drop.style.transform = `translateY(0)`;
    boardEl.appendChild(drop);

    drop.style.transition = `transform ${DROP_SPEED_MS}ms cubic-bezier(.3, 0, .2, 1)`;
    requestAnimationFrame(() => {
      const targetY = slotRect.top - boardRect.top + slotRect.height * DISC_INSET;
      drop.style.transform = `translateY(${targetY}px)`;
    });

    drop.addEventListener('transitionend', () => {
      drop.remove();
      board[row][col] = player;
      history.push({ row, col, player });
      winner = checkWinner(row, col);
      if (!winner) current = current === 'red' ? 'yellow' : 'red';
      isDropping = false;
      render();
    }, { once: true });
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
