var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var computerGuess = "";

function reset(){
    guessedLetters = [];
    guessesLeft = 9;
}

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");


document.onkeyup = function(event) {

    var userGuess = event.key;

    computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length -1)];

    if (userGuess === computerGuess) {
        wins++;
        reset();

    } else {
        guessesLeft--;
        guessedLetters.push(" " + userGuess);
    } 
    
    if (guessesLeft === 0) {
        losses++;
        reset();
    }

    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    guessesSoFarText.textContent = guessedLetters;
};
