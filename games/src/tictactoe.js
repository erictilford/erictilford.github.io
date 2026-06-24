document.addEventListener('DOMContentLoaded', () => {
	const cells = Array.from(document.querySelectorAll('.cell'));
	const statusEl = document.getElementById('status');
	const undoBtn = document.getElementById('undo');
	const restartBtn = document.getElementById('restart');

	let board = Array(9).fill(null);
	let current = 'X';
	let winner = null;
	const history = [];

	const wins = [
		[0,1,2],[3,4,5],[6,7,8],
		[0,3,6],[1,4,7],[2,5,8],
		[0,4,8],[2,4,6]
	];

	function getStatusIcon(symbol) {
		if (symbol === 'X') return '<i class="fa-solid fa-xmark x-icon" aria-hidden="true"></i>';
		if (symbol === 'O') return '<i class="fa-solid fa-o o-icon" aria-hidden="true"></i>';
		return '';
	}

	function render() {
		cells.forEach((cell, i) => {
			const symbol = board[i];
			if (symbol === 'X') {
				cell.innerHTML = '<i class="fa-solid fa-xmark x-icon" aria-hidden="true"></i>';
			} else if (symbol === 'O') {
				cell.innerHTML = '<i class="fa-solid fa-o o-icon" aria-hidden="true"></i>';
			} else {
				cell.textContent = '';
			}
			cell.classList.toggle('x', symbol === 'X');
			cell.classList.toggle('o', symbol === 'O');
		});
		if (winner) {
			if (winner === 'draw') {
				statusEl.textContent = "It's a draw";
			} else {
				statusEl.innerHTML = `${getStatusIcon(winner)} wins!`;
			}
		} else {
			statusEl.innerHTML = `${getStatusIcon(current)}'s turn`;
		}
	}

	function checkWinner() {
		for (const [a,b,c] of wins) {
			if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
		}
		return board.every(Boolean) ? 'draw' : null;
	}

	function play(index) {
		if (board[index] || winner) return;
		history.push({index, player: current});
		board[index] = current;
		winner = checkWinner();
		if (!winner) current = current === 'X' ? 'O' : 'X';
		render();
	}

	function undo() {
		if (!history.length || winner) return;
		const last = history.pop();
		board[last.index] = null;
		current = last.player;
		winner = null;
		render();
	}

	function restart() {
		board = Array(9).fill(null);
		current = 'X';
		winner = null;
		history.length = 0;
		render();
	}

	cells.forEach((cell) => {
		cell.addEventListener('click', () => play(Number(cell.dataset.index)));
		cell.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				play(Number(cell.dataset.index));
			}
		});
	});

	undoBtn.addEventListener('click', undo);
	restartBtn.addEventListener('click', restart);

	render();
});
