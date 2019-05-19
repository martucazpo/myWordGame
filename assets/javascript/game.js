
var words = ["tree", "bear", "stickers", "nature", "bugs"];
var guess, userGuess, result;

var word = words[Math.floor(Math.random() * words.length)];
 // Set up the answer array
 var answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
 }
 var remainingLetters = word.length;
 // The game loop
 if (remainingLetters > 0) {
 // Show the player their progress
 console.log(answerArray.join(" "));
 }
 // Get a guess from the player
 function getUserGuess(){
    var userGuess = document.getElementById("letter");
    var result = document.getElementById("result");
 }

 var guess = document.getElementById("letter");
 // Update the game state with the guess
 for (var j = 0; j < word.length; j++) 
 {
 if (word[j] === guess){
 answerArray[j] = guess;
 remainingLetters--;}

};


// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);


/* make a function that recieves to userLetter */

/* make a loop that runs the userLetter through the word to see if the letters match*/

/*function guessLetter(letter) {
    var goodGuess = false;
    var moreToGuess = false;
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
        }
        if (guessedLetters[i] == '_') {
            moreToGuess = true;
        }
    }
    if (goodGuess) {
        console.log('Yay, you found a letter!');
        console.log(guessedLetters.join(''));
        if (!moreToGuess) {
            console.log('YOU WON!');
        } 
    } else {
        console.log('Oh noes, thats not right!');
    }
}*/
/* if so, display letter in the appropriate space,
if not, log the letter and lose a turn.d */


/*if guess word in less than 10 turns, win; if not, lose, game resets */