function Score() {
	this.tracker = function(win) {
		if(win) {
			console.log("Great job! You guessed all of them right!");
			
		} else {
			console.log("No more guesses. You lost!");
		}
	}
}

module.exports = Score;