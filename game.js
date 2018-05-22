var inquirer = require("inquirer");

var Word = require("./word.js");
var newWord = new Word();

var Letter = require("./letter.js");

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
			newWord.blankSpaces(newRanWord);
		}
		else {
			this.selectWord();
		}

		userGuess();
		return var currentWord = this.chosenWords[chosenWords.length - 1];
	};

	this.userGuess = function() {
		this.askForGuess().then(function() {
			if(this.guessesLeft < 1) {
				console.log("No guesses left! The phrase was:", currentWord);
			}
		});
	}

	this.askForGuess = function() {
		var userGuesses = [];

		return inquirer.prompt([
			{
				type: "input",
				name: "choice",
				message: "Guess a letter"
			}
		]).then(function(input){
			userGuesses.push(input.choice);
			console.log(userGuesses);

			if(!Letter(input)) {
				this.guessesLeft--;
			} else {

			}
		});
	}
}