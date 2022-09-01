const gameBoardArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
const gameBoardElements = document.querySelectorAll('.gameSpace');

function updateGameBoard(array) {
	for (let i = 0; i < array.length; i++) {
		gameBoardElements[i].innerHTML = `<p>${array[i]}</p>`;
	}
}

function gameSpace(e) {
	alert(`clicked`);
}

const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');

btn0.addEventListener('click', gameSpace);
btn1.addEventListener('click', gameSpace);
btn2.addEventListener('click', gameSpace);
btn3.addEventListener('click', gameSpace);
btn4.addEventListener('click', gameSpace);
btn5.addEventListener('click', gameSpace);
btn6.addEventListener('click', gameSpace);
btn7.addEventListener('click', gameSpace);
btn8.addEventListener('click', gameSpace);

let test = updateGameBoard(gameBoardArray);
