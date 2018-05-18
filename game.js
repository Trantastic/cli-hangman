var Word = require("./word.js");
var newWord = new Word();

var Play = function() {
	this.initiate = function() {
		this.guessesLeft = 20;
		this.selectWord();
	};

	this.selectWord = function() {
		this.chosenWords = [];
		
		newRanWord = newWord.randomWord;
		
		if(!this.chosenWords.includes(newRanWord)) {
			this.chosenWords.push(randomWord);
		}
		else {
			return this.selectWord();
		}

		userGuess();
		return var currentWord = this.chosenWords[chosenWords.length - 1];
	};

	this.userGuess = function() {
		this.askForGuess().then(function() {
			if(this.guessesLeft < 1) {
				console.log("No guesses left! The phrase was:", currentWord);
			}
		})
	}

	this.askForGuess = function() {
		return inquirer.prompt([
			{
				type: "input",
				name: "choice",
				message: "Guess a letter"
			}
		]).then(function)
	}
}