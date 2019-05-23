// <!-- make a variable letterOption with a value of array of letter options <A-Z> x

// why? this is going to help us generate a random   x   -- computerGuess is now math.random   x

// variable wins initially set to 0   x

// variable loses intiation set to 0   x

// variable guessesLeft intitally set to 9.  x

// variable guessedLetters which is initially set to an empty array  x

// Computer picks a random letter    x
//    - the random letter is going to come from the alaphabet Array   x

// ________________________

// actions/ functions

// adding letters that to guessedLetters array (adding arguement of a letter)   x

//     - takes letters guessed and pushes into guessedLetters x 

// decrement guess count

//     - checks to see if guesses remaining is 0      NEED TO DO
//     - if not, decrement down by one guesses guessesLeft
//     - 0, increase loses by 1
//     - lose game/ restart

// increment wins
//     - if the correct letter is selected, then wins goes up by 1 (reset) - must define reset in a function

// increment losses
//     - if the guess count goes = 0, then increment loss count by 1 (reset)    x
//     - a loss is defined as guesscount = 0      x

// guesses so far 
//     -when the user guesses a letter, it needs to be pushed to the guessed letters Array    x
//     -this needs to be displayed on the screen --- 
    
//     point.innerHTML | var "name" = document.getElementByID("ID NAME")

// if

// else

//     if 

.innerHTML
//     event.onkeyup 

//         - check to see if key pressed is equal to computer guess
//         - if not, add it to lettersGuessed
//         -check to see if guessCount
//             -if is, increment loses, reset game
//                     - set guesses back to 9
//                     - empty the guess array -->










var letterOptions = ["a", "b", "c"];

var wins = [];

var loses = [];

var guessesLeft = [9];

var guessedLetters = [];


