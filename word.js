var wordBank = ["finn the human", "jake the dog", "adventure time", "card wars", "everything burrito", "lumpy space princess", "oh my glob"];

var Word = function() {
	// Selects random word from wordBank
	this.randomWord = function() {
		return wordBank[Math.floor(Math.random() * wordBank.length)];
	};
	// Replaces selected random word with underscores and prints it
	this.correctLetters = [];
	// Tracks if whole phrase has been guessed
	this.nextWord = false;
	this.blankSpaces = function(word) {
		var arr = word.split("");
		var blankHolder = [];

		for(var i = 0; i < word.length; i++) {
			if(this.correctLetters.includes(arr[i])) {
				blankHolder.push(arr[i]);

				if(blankHolder.length === arr.length) {
					this.nextWord = true;
				}
			}
			else if(arr[i] !== " ") {
				blankHolder.push("_");
			} 
			else {
				blankHolder.push(" ");
			}
		}
		console.log("\n" + blankHolder.join("") + "\n");
	};
}

module.exports = Word;