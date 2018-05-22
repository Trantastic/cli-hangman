var wordBank = ["finn the human", "jake the dog", "adventure time", "card wars", "everything burrito", "lumpy space princess", "oh my glob"];

var Word = function() {
	// Selects random word from wordBank
	this.randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	// Replaces selected random word with underscores and prints it
	this.correctLetters = [];
	this.blankSpaces = function(word) {
		var arr = word.split("");
		var blankHolder = [];

		for(var i = 0; i < word.length; i++) {
			if(this.correctLetters.includes(arr[i])) {
				blankHolder.push(arr[i]);
			}
			else if(arr[i] !== " ") {
				blankHolder.push("_");
			} else {
				blankHolder.push(" ");
			}
		}
		console.log(blankHolder.join(""));
	}
}

module.exports = Word;