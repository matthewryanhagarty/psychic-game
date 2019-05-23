var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = [];
var loses = [];
var guessesLeft = [9];
var guessedLetters = [];


var random = letterOptions[Math.floor(Math.random() * letterOptions.length)];

console.log(random)