let boxes = document.querySelectorAll(".box");
let isflipped = false;
let firstCard, secondCard;

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
}

// For Fail
const fail = () => {
  console.log("fail");
  setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      reset();
  }, 400);
}

// For Reset 
const reset = () => {
     isflipped = false;
    firstCard = null;
     secondCard  = null;
}

