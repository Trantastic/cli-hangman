var inquirer = require("inquirer");

var Word = require("./word.js");
var newWord = new Word();

var Score = require("./score.js");
var newScore = new Score();

var Play = function() {
	var self = this;
	var currentWord;

	this.initiate = function() {
		this.letterArr = newWord.correctLetters;
		this.userGuesses = [];
		this.chosenWords = [];
		this.guessesLeft = 20;
		this.selectWord();
	};

	this.selectWord = function() {
		if(this.chosenWords.length === 7) {
			newScore(true);
			this.playAgain();
		}
		
		var newRanWord = newWord.randomWord;
		
		if(!this.chosenWords.includes(newRanWord)) {
			this.chosenWords.push(newRanWord);
			newWord.blankSpaces(newRanWord);
		}
		else {
			this.selectWord();
		}

		currentWord = this.chosenWords[this.chosenWords.length - 1];
		this.userGuess();
	};

	this.userGuess = function() {
		this.askForGuess().then(function() {
			if(this.guessesLeft < 1) {
				newScore(false);
				console.log("The phrase was:", currentWord);
				this.playAgain();
			}
		});
	}

	this.askForGuess = function() {
		var currentWordArr = currentWord.split("");

		return inquirer.prompt([
			{
				type: "input",
				name: "choice",
				message: "Guess a letter"
			}
		]).then(function(input) {
			self.userGuesses.push(input.choice);
			console.log("\nLetters Guessed: " + self.userGuesses + "\n");

			if(!currentWordArr.includes(input.choice)) {
				self.guessesLeft--;
				console.log("Guesses Left:", self.guessesLeft);
				console.log("Incorrect!\n");
				self.userGuess();
				newWord.blankSpaces(currentWord);
			} else {
				console.log("Correct!\n");
				self.letterArr.push(input.choice);
				self.reprint();
			}
		});
	}

	this.reprint = function() {
		if(this.letterArr.length === currentWord.length) {
			this.selectWord();
		} else {
		newWord.blankSpaces(currentWord);
		this.askForGuess();
		}
	}

	this.playAgain = function() {
		return inquirer.prompt([
			{
				type: "confirm",
				name: "playAgain",
				message: "Play Again?"
			}
		]).then(function(input) {
			if(input.playAgain) {
				self.initiate();
			} else {
				console.log("Goodbye");
				process.exit();
			}
		})
	}
}

module.exports = Play;