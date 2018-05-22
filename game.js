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
		this.guessesLeft = 20;
		this.selectWord();
	};

	this.selectWord = function() {
		this.chosenWords = [];

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
			}
		});
	}

	this.askForGuess = function() {
		var userGuesses = [];
		var currentWordArr = currentWord.split("");

		return inquirer.prompt([
			{
				type: "input",
				name: "choice",
				message: "Guess a letter"
			}
		]).then(function(input) {
			userGuesses.push(input.choice);
			console.log(userGuesses);

			if(!currentWordArr.includes(input.choice)) {
				self.guessesLeft--;
				console.log("Guesses Left:", self.guessesLeft);
				console.log("Incorrect!");
				self.userGuess();
			} else {
				console.log("Correct!");
				self.letterArr.push(input.choice);
				self.reprint();
				self.askForGuess();
			}
		});
	}

	this.reprint = function() {
		newWord.blankSpaces(currentWord);
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