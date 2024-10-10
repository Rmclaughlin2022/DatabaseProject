// variables
const wordDisplay = document.querySelector(".word-display");
const guessesTxt = document.querySelector(".guesses-Txt");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanPic = document.querySelector(".hangmanBox-Pic");
const gameModel = document.querySelector(".game-Model");
const playAgainButt = gameModel.querySelector(".playAgaing-Butt");

// initializing 

let currentWord, correctLetters, wrongGuessCount;
const maxGuess = 6;

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanPic.src = "hangman-0.svg";
    guessesTxt.innerText = `${wrongGuessCount} / ${maxGuess}`;
    // create empty letter dashes 
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li`).join("");
    // enable keyboard buttons
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    // hide game model
    gameModel.classList.remove("show");
}

resetGame(); 
