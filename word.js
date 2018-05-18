var wordBank = ["finn the human", "jake the dog", "adventure time", "card wars", "everything burrito", "lumpy space princess", "oh my glob"];

var Word = function() {
	this.randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	this.blankSpaces = function(word) {
		var arr = word.split("");
		var blankHolder = [];

		for(var i = 0; i < word.length; i++) {
			if(arr[i] !== " ") {
				blankHolder.push("_");
			} else {
				blankHolder.push(" ");
			}
		}
		console.log(blankHolder.join(""));
	}
	this.letterGuessed = function(letter) {
		var letterFound = false;
		this.arr
	}
}

module.exports = Word;