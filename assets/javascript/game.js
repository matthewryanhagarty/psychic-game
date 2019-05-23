var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = [];
var loses = [];
var guessesLeft = [9];
var guessedLetters = [];


var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];

document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];

        if ( userGuess = computerGuess) {
            wins++;
        }
            else {
                guessesLeft--;
                guessedLetters.push(userGuess);
    }
}

document.onkeyup()

var winsText = document.getElementById("winsText");
var losesText = document.getElementById("losesText");
var livesLeftText = document.getElementById("livesLeftText");
var guessSoFarText = document.getElementById("guessesSoFarText");