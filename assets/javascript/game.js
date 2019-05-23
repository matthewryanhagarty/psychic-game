var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var loses = 0;
var guessesLeft = 9;
var guessedLetters = [];


   // Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var loses = document.getElementById("lloses-text");
var livesLeft = document.getElementById("lives-left-text");
var guessSoFar = document.getElementById("guesses-so-far-text");


document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];

        if (userGuess = computerGuess) {
            wins++;
        }
            else {
                guessesLeft--;
                guessedLetters.push(userGuess);
            }
    }
        if (guessesLeft === 0) {
                function reset(){
                    guessesLeft = 9;
                    guessedLetters = [];
                }
        }

// winsText.textContent = wins;

console.log(computerGuess)
