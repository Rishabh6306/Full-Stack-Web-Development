let boxes = document.querySelectorAll(".box");
let btn = document.getElementById("resetbtn");
let display = document.querySelector('#timer');
let isflipped = false;
let firstCard, secondCard;
let timerInterval; // This varible'need only for reset the timer
let count = 0;
document.getElementById("para").innerText = `Flipped: ${count}`

boxes.forEach((box) => {
     box.addEventListener("click", flip)
});

// For Suffering The Cards
(function suffle() {
    boxes.forEach((box) => {
         let indexnumber = Math.floor(Math.random() * 16)
         box.style.order = indexnumber;
    });
})()


// for fliping 
function flip() {
    this.classList.add("flip")
    if (!isflipped) {
        isflipped = true;
        firstCard = this;
    } else {
        secondCard = this;
        check();
    }
}

// For win check 
const check = () => {
    (firstCard.dataset.image === secondCard.dataset.image) ? win() : fail(); 
}


// For Win 
const win = () => {
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset()
    count++;
    document.getElementById("para").innerText = `Flipped: ${count}`
}
// For Fail
const fail = () => {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        count++
        // console.log(count);
        document.getElementById("para").innerText = `Flipped: ${count}`
        reset();
    }, 400);
}

// For Reset the cards if not same 
const reset = () => {
     isflipped = false;
      const newLocal = firstCard = null;
     secondCard  = null;
}

const showGameOverScreen = () => {
    const gameOverScreen = document.createElement("div");
    gameOverScreen.id = "game-over-screen";
    gameOverScreen.textContent = "Game Over!";
    
    const resetButton = document.createElement("button");
    console.log(resetButton);
    resetButton.textContent = "Restart";
    resetButton.addEventListener("click", function () {
      location.reload();
    });
    gameOverScreen.appendChild(resetButton);
    document.body.appendChild(gameOverScreen);

    boxes.forEach((box) => box.removeEventListener("click", flip));
  }

// For timer 
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = "Timer:" + " " + minutes + ":" + seconds;
  
      if (--timer < 0) {
        timer = duration;
        clearInterval(timerInterval)
       display.textContent = "Timer:" + " " + "00" + ":" + "00";
       showGameOverScreen();
      }
    }, 1000);
  }

var duration = 60 * 5; // 2 minutes in seconds
startTimer(duration, display);




// If you loose the game for reset game, button 
btn.addEventListener("click", resetGame);

function resetGame() {
  boxes.forEach((box) => box.classList.remove("flip"));
  count = 0;
  document.getElementById("para").innerText = `Flipped: ${count}`;
  reset();

    // add click event listener back to all cards
boxes.forEach((box) => box.addEventListener("click", flip));
  clearInterval(timerInterval);
  startTimer(duration, display);
}

