let playerScore = 0;
let computerScore = 0;
const player_score = document.getElementById('player_score');
const computer_score = document.getElementById('computer_score');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissor');

function computerAnswer () {
	const choices = [
		'rock',
		'paper',
		'scissors'
	];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function match (userChoice) {
	const computerChoice = computerAnswer();
	switch (userChoice + computerChoice) {
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			win(userChoice, computerChoice);
			break;
		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			lose(userChoice, computerChoice);
			break;
		case 'rockrock':
		case 'scissorsscissors':
		case 'paperpaper':
			draw(userChoice, computerChoice);
			break;
	}
}

function win (userChoice, computerChoice) {
	playerScore++;
	player_score.innerHTML = playerScore;
}

function lose (userChoice, computerChoice) {
	computerScore++;
	computer_score.innerHTML = computerScore;
}

function draw (userChoice, computerChoice) {}

function main_menu () {
	rock_div.addEventListener('click', function () {
		match('rock');
	});
	paper_div.addEventListener('click', function () {
		match('paper');
	});
	scissors_div.addEventListener('click', function () {
		match('scissors');
	});
}

main_menu();
