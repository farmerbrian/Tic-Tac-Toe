let gameBoardArray = ['', '', '', '', '', '', '', '', ''];
const gameBoardElements = document.querySelectorAll('.gameSpace');
let h2 = document.querySelector('#winner');
let vs = document.querySelector('#vs');
let player1Turn = true;
let gameOver = false;
let player1;
let player2;
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	player1 = form.p1.value;
	player2 = form.p2.value;
	vs.innerHTML = `${player1} VS ${player2}`;
	console.log(player1);
	console.log(player2);
});

function reset() {
	gameBoardArray = ['', '', '', '', '', '', '', '', ''];
	updateGameBoard(gameBoardArray);
	player1Turn = true;
	gameOver = false;
	h2.innerHTML = '';
}

function updateGameBoard(array) {
	for (let i = 0; i < array.length; i++) {
		gameBoardElements[i].innerHTML = `<p>${array[i]}</p>`;
	}
}

function playerToggle() {
	if (player1Turn == true) {
		player1Turn = false;
	} else {
		player1Turn = true;
	}
}

function gameOverMsg(text) {
	if (text == 'TIE') {
		h2.innerHTML = 'Game Over !!! Tie Game!!!';
	} else {
		if (player1Turn == true) {
			h2.innerHTML = `Congratulations, ${player1} is the winner!!!`;
		} else {
			h2.innerHTML = `Congratulations, ${player2} is the winner!!!`;
		}
	}
}

function isGameOver() {
	if (!gameBoardArray.includes('')) {
		gameOver = true;
		gameOverMsg('TIE');
	} else if (
		gameBoardArray[0] == gameBoardArray[1] &&
		gameBoardArray[0] == gameBoardArray[2] &&
		!gameBoardArray[0] == ''
	) {
		gameOver = true;
		gameOverMsg('WON');
	} else if (
		gameBoardArray[3] == gameBoardArray[4] &&
		gameBoardArray[3] == gameBoardArray[5] &&
		!gameBoardArray[3] == ''
	) {
		gameOver = true;
		gameOverMsg('WON');
	} else if (
		gameBoardArray[6] == gameBoardArray[7] &&
		gameBoardArray[6] == gameBoardArray[8] &&
		!gameBoardArray[6] == ''
	) {
		gameOver = true;
		gameOverMsg('WON');
	} else if (
		gameBoardArray[0] == gameBoardArray[3] &&
		gameBoardArray[0] == gameBoardArray[6] &&
		!gameBoardArray[0] == ''
	) {
		gameOver = true;
		gameOverMsg('WON');
	} else if (
		gameBoardArray[1] == gameBoardArray[4] &&
		gameBoardArray[1] == gameBoardArray[7] &&
		!gameBoardArray[1] == ''
	) {
		gameOver = true;
		gameOverMsg('WON');
	} else if (
		gameBoardArray[2] == gameBoardArray[5] &&
		gameBoardArray[2] == gameBoardArray[8] &&
		!gameBoardArray[2] == ''
	) {
		gameOver = true;
		gameOverMsg('WON');
	} else if (
		gameBoardArray[0] == gameBoardArray[4] &&
		gameBoardArray[0] == gameBoardArray[8] &&
		!gameBoardArray[0] == ''
	) {
		gameOver = true;
		gameOverMsg('WON');
	} else if (
		gameBoardArray[6] == gameBoardArray[4] &&
		gameBoardArray[6] == gameBoardArray[2] &&
		!gameBoardArray[6] == ''
	) {
		gameOver = true;
		gameOverMsg('WON');
	} else {
		gameOver = false;
	}
}

function gameSpace(e) {
	if (gameOver == false) {
		if (player1Turn == true) {
			gameBoardArray[this.id] = 'X';
		} else {
			gameBoardArray[this.id] = 'O';
		}
		isGameOver();
	} else {
	}

	playerToggle();
	updateGameBoard(gameBoardArray);
}

function getElement(id) {
	return document.getElementById(id);
}

const btn0 = getElement('0');
const btn1 = getElement('1');
const btn2 = getElement('2');
const btn3 = getElement('3');
const btn4 = getElement('4');
const btn5 = getElement('5');
const btn6 = getElement('6');
const btn7 = getElement('7');
const btn8 = getElement('8');

// for (let i = 0; i < 9; i++) {
// 	let btn = 'btn';
// 	btn = `${btn}` + `${i}`;
// 	console.log(btn);
// 	btn.addEventListener('click', gameSpace);
// }

btn0.addEventListener('click', gameSpace);
btn1.addEventListener('click', gameSpace);
btn2.addEventListener('click', gameSpace);
btn3.addEventListener('click', gameSpace);
btn4.addEventListener('click', gameSpace);
btn5.addEventListener('click', gameSpace);
btn6.addEventListener('click', gameSpace);
btn7.addEventListener('click', gameSpace);
btn8.addEventListener('click', gameSpace);

// const btnFactory = (id) = > {
