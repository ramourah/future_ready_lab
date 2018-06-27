/*eslint-env browser*/
function playGame() {
alert(("Select a low number and a high number. Then, select a number between them."));
//Make sure only numbers are input.
   
//get the low and high bounds
//use parseInt() to make sure we have numbers, not strings
var from = parseInt(prompt("Enter the lower bound."));
//Lower bound cannot be less than 0.
    while(from < 0){
        from = parseInt(prompt('The lower bound cannot be less than 0.'))
    }
//Make sure lower bound is number.
    while(isNaN(from)){
        from = parseInt(prompt("Please input numbers only."))
    }
var to = parseInt(prompt("Enter the higher bound."));
//Higher bound cannot be greater than 1,000. 
while(to > 1000){
    to = parseInt(prompt("The higher bound cannot be greater than 1,000."))
}
//Make sure higher bound is number. 
    while(isNaN(to)){
        to = parseInt(prompt("Please input numbers only."))
    }
//Make sure that var from is less than var to. 
while(from >= to){
    from = parseInt(prompt("The lower bound cannot be greater than or equal to the higher bound."))
}
    
//get integer bwteen [from , to]. Math.random() returns decimals, use Math.round() to get whole numbers
var target = Math.round(Math.random() * (to - from) + from);
var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));
//The user's guess must be between from and to (higher and lower bounds).
    while(currentGuess < from || currentGuess > to){
        currentGuess = parseInt(prompt("The guess must be between the higher and lower bounds."))
    }
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