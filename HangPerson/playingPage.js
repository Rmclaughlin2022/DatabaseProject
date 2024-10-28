const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");
const guessesText = document.querySelector(".guesses-text b");
const hangmanPic = document.querySelector(".hangmanBox-Pic");
const gameModel = document.querySelector(".game-Model");
/*const playAgainButt = gameModel.querySelector(".playAgaing-Butt");*/

let currentWord, wrongGuessCount = 0;
const maxGuess = 6;

/*const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanPic.src = "hangman-0.svg";
    guessesTxlt.innerText = `${wrongGuessCount} / ${maxGuess}`;
}

resetGame(); 
*/
const getRandomWord = () => {
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => '<li class="letter"></li>').join("");
}

const initGame = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        console.log(clickedLetter, "does exist on the word");
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {
        wrongGuessCount++;
    }
    guessesText.innerText = {wrongGuessCount} /  {maxGuesses};
}

for (let i = 97; i<= 122; i++){
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
