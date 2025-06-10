let randomnumber=(parseInt(Math.random()*100+1))
const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
//🎯 Purpose: Links JavaScript to the HTML elements using their ID or class so you can read user input, display results, and manipulate the DOM.

const p = document.createElement('p')

let prevguess = []
 let numguess = 1
 let playgame = true
 
 /* prevGuess[]: stores all the guesses made so far.

numGuess: tracks how many guesses the user has used.

playGame: controls whether the game is still running (true) or has ended (false).*/

 if (playgame){
   submit.addEventListener('click',function(e){
     e.preventDefault()
     const guess=parseInt(userinput.value)
     validateguess(guess)
   })
 }
 /* Runs when the user clicks "Submit Guess".

Stops the form from refreshing (e.preventDefault()).

Converts the input to a number and sends it to validateGuess().
*/
 function validateguess (guess)
 {
   if(isNaN(guess)){
     alert('please eneter a valid number')
   }
   else if(guess < 1)
   {
     alert('please enter a number more than 1')
   }
   else if(guess > 100)
   {
     alert('please enter a  number less than 100')
   }
   else{
     prevguess.push(guess)
     if(numguess === 11){
     displayguess(guess) 
     displaymessage(`Game over. Random number was ${randomnumber}`)
     endgame()

    }
    else{
      displayguess(guess)
      checkguess(guess)
    }
   }
 }

 /**
  Checks if the user entered a valid number.

If valid: stores the guess in prevGuess[].

If 10 attempts are over (i.e., 11th guess): ends game.

Otherwise: displays guess and checks if it’s correct.
  */

 function checkguess(guess)
 {
   if(guess=== randomnumber){
     displaymessage(`you guessed the right number`)
     endgame()
   }
   else if(guess < randomnumber)
   {
     displaymessage(`number is too low`)
   }
   else if(guess > randomnumber)
   {
     displaymessage(`number is too high`)
   }

 }
 /**
  Compares the user’s guess with the actual random number.

Shows the result and ends game if correct.
  */

function displayguess(guess)
{
  userinput.value = ''
  guessslot.innerHTML += `${guess}  `
  numguess++
  remaining.innerHTML = `${11-numguess}` 

}
/**
 * Clears the input box.

Adds the guess to the "Previous Guesses" section.

Increases the guess count.

Updates how many guesses are left.
 */

function displaymessage(message)
{
  lowOrHi.innerHTML = `<h2>${message}</h2>`

}
/**
 * Displays feedback to the player ("too high", "too low", "correct", etc.)
 */

function  endgame()
 {
   userinput.value = ''
   userinput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML = `<h2 id= "newgame">start new game</h2>`;
   startOver.appendChild(p)
   playgame = false
   newgame()
 }
 /**
  * Disables the input field.

Creates a new button to start a new game.

Calls newGame() to set up the restart.
  */
 function newgame()
 {
   const newgamebutton=document.querySelector('#newgame');
   newgamebutton.addEventListener('click',function(e){
     randomnumber = parseInt(Math.random() * 100 + 1)
     prevguess =[];
     numguess = 1;
     guessslot.innerHTML = '';
     remaining.innerHTML = `${11-numguess}`
     userinput.removeAttribute('disabled');
     startOver.removeChild(p);

     playgame = true;
   });
/**
 * Resets the game:

Generates a new random number

Clears guesses

Enables the input field again

Removes the "Start new Game" button
 */
 }
