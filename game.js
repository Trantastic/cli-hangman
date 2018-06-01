var inquirer = require("inquirer");

var Word = require("./word.js");
var newWord = new Word();

var Score = require("./score.js");
var newScore = new Score();

var Play = function() {
	// Assigning this to a variable because inquirer does weird things when using "this"
	var self = this;
	var currentWord;

	this.initiate = function() {
		// newWord.nextWord = false;
		this.letterArr = newWord.correctLetters;
		this.chosenWords = [];
		this.userGuesses = [];
		this.guessesLeft = 20;
		this.selectWord();
	};

	this.selectWord = function() {
		// this.userGuesses = [];
		// newWord.blankHolder = [];

		// If player has guessed all the words, ask if they want to play again
		if(this.chosenWords.length === 7) {
			newScore.tracker.tracker(true);
			this.playAgain();
		}
		
		var newRanWord = newWord.randomWord();
		
		// If word has not been chosen yet push into chosenWords arr
		if(!this.chosenWords.includes(newRanWord)) {
			this.chosenWords.push(newRanWord);
			newWord.blankSpaces(newRanWord);
		}
		// If word has already been chosen, pick a new word
		else {
			this.selectWord();
		}

		currentWord = this.chosenWords[this.chosenWords.length - 1];
		this.askForGuess();
	};

	// Prompts user for to guess a letter and checks if it's incorrect or correct
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

				if(self.guessesLeft === 0) {
					return self.userGuess();
				}

				console.log("Guesses Left:", self.guessesLeft);
				console.log("Incorrect! Try again.\n");

				newWord.blankSpaces(currentWord);
				self.askForGuess();
			} else {
				console.log("Mathemathical! You got it right.\n");

				for(var i = 0; i < currentWord.length; i++) {
					if(input.choice === currentWordArr[i]) {
						self.letterArr.push(input.choice);
					}
				}

				self.reprint();
			}
		});
	};

	// If player runs out of guesses (loses), prints the whole phrase
	this.userGuess = function() {
		newScore.tracker(false);
		console.log("The phrase was:", currentWord);
		this.playAgain();
	};

	this.reprint = function() {
		var noSpaces = currentWord.split("").join("");
		// Resets variables if word has been guessed correctly
		if(this.letterArr.length === noSpaces.length) {
		// if(!newWord.blankHolder.includes("_")) {
			// newWord.nextWord = false;
			currentWord = "";
			this.userGuesses = [];
			this.letterArr = [];
			this.selectWord();
			console.log("currentWord", currentWord);
		} 
		// Reprints word with already correctly guessed letters
		else {
			// newWord.blankHolder = [];
			newWord.blankSpaces(currentWord);
			this.askForGuess();
		}
	};

	// Prompts user if they want to play again
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
		});
	};
}

module.exports = Play;