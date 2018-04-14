var Word = function() {
	
	this.wordOptions = ["aces", "remington", "winchester", "horse", "carriage", "pistols", "sheriff", "yeehaw", "buckaroo", "howdy", "saddle"];
	this.blanks = [];
	this.lettersInWord = "";
	this.result = "";
	this.selectedWord = [];

	this.randomWord = function() {

		this.selectedWord = this.wordOptions[Math.floor(Math.random() * this.wordOptions.length)]
		lettersInWord = this.selectedWord.split("");

		for ( i in lettersInWord) {
			this.blanks.push("_");
		}

		var x = this.blanks.toString();
		this.result = x.replace(/,/g, " ");
			console.log(this.result + "\n");
	};	
};


module.exports = Word;