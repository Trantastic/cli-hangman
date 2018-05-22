// Feed this function into game.js where inquirer is getting user input

function Score() {
	this.guessLeft = 20;
	this.lose = false;
	this.win = false;

	this.tracker = function() {
		if(this.lose) {
			console.log("No more guesses. You lost!");
		}
		else if(this.win) {
			console.log("Great job! You guessed all of them right!");
		}
	}
}

module.exports = Score;