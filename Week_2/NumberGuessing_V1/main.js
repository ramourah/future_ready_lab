/*eslint-env browser*/
function playGame() {
alert(("Select a low number and a high number. Then, select a number between them."));

//get the low and high bounds
//use parseInt() to make sure we have numbers, not strings
var from = parseInt(prompt("Enter the lower bound."));
var to = parseInt(prompt("Enter the higher bound."));
//get integer bwteen [from , to]. Math.random() returns decimals, use Math.round() to get whole numbers
var target = Math.round(Math.random() * (to - from) + from);
var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));
var totalGuesses = 1;
//loop until user guesses correctly
while(currentGuess != target){
    if(currentGuess < target){
        currentGuess = parseInt(prompt("Enter a higher number."));
        
        totalGuesses++
    }else if(currentGuess > target){
        currentGuess = parseInt(prompt("Enter a lower number."));
        
        totalGuesses++
    }
    }
    //notify user when they have guessed correctly. Show how many tries it took.
    alert("It took " + totalGuesses + " tries to guess the correct number.");
}
