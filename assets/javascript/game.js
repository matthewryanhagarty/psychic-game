var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var loses = 0;
var guessesLeft = 9;
var guessedLetters = [];


   // Create variables that hold references to the places in the HTML where we want to display things.
document.getElementById("wins-text").innerHTML = wins;
document.getElementById("loses-text").innerHTML = loses;
document.getElementById("guesses-left-text").innerHTML = guessesLeft;
document.getElementById("guesses-so-far-text").innerHTML = guessSoFar;


document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];

    // first if else if - option one
    if (userGuess = computerGuess) {
        wins++;

    } else
        (guessesLeft--);
        (guessedLetters.push(userGuess));
    } 
    
    if (guessesLeft === 0);
        function reset(){
            guessesLeft = 9;
            guessedLetters = [];
    };

    // second if else if - option 2

    // if (userGuess = computerGuess) {
    //     wins++;
    // }
    //     else ((userGuess !-- computerGuess)) {
            
    //         (guessesLeft--);
    //         (guessedLetters.push(userGuess));

    //     }
    //         if ((guessesLeft === 0)) {
    //                 function reset(){
    //                     guessesLeft = 9;
    //                     guessedLetters = [];
    //                 }
    //             }

    // third if else - option 3

//     if (userGuess = computerGuess) {
//         wins++;

//     } else if
//         (guessesLeft === 0);
//         function reset(){
//             guessesLeft = 9;
//             guessedLetters = [];

// // whenever i type else it does not work

//     } if
//         (guessesLeft--);
//         (guessedLetters.push(userGuess));
//     }

// winsText.innerHTML = wins;

// console.log(wins)
