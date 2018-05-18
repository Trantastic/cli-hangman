var wordBank = ["finn the human", "jake the dog", "adventure time", "card wars", "everything burrito", "lumpy space princess", "oh my glob"];

var Word = function() {
	this.randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	this.blankSpaces = function() {
		var arr = this.randomWord.split("");
		var blankHolder = [];

		for(var i = 0; i < this.randomWord.length; i++) {
			if(arr[i] !== " ") {
				blankHolder.push("_");
			} else {
				blankHolder.push(" ");
			}
		}
		console.log(blankHolder.join(""));
	}
}

module.exports = Word;