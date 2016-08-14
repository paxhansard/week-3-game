
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


		if (event.keyCode >= 65 && event.keyCode <= 90){
			if (userGuess == computerGuess){
					wins++;
					guessesLeft = 9;
					guesses = [];
				}else if ((userGuess !== computerGuess) && (guessesLeft > 1)){
					guessesLeft--;
					guesses.push(" " + userGuess);
				}else if ((userGuess !== computerGuess) && (guessesLeft == 1)){
					losses++;
					guessesLeft = 9;
					guesses = [];
				}
			}

		var html = "<h1>Psychic Game</h1>" +
			"<p>Guess what letter I'm thinking of...</p>" +
		"<p>Wins: " + 
		wins + 
		"</p>" +
		"<p>Losses: " + 
		losses + 
		"</p>" +
		"<p>Guesses Left: " + 
		guessesLeft + 
		"</p>" +
		"<p>Your Guesses so far: " + 
		guesses + 
		"</p>";


		document.querySelector('#game').innerHTML = html;

	}