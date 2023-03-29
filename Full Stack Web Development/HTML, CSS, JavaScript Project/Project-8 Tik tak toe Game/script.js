let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let winmusic = new Audio("win.mp3");
let turn = "X";
let allgameover = false;

// for change the turn
const changeturn = () => {
  if (turn === "X") {
    return "0";
  } else {
    return "X";
  }
};

// for which person win
const checkwin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2, 5, 5, 0, "17%", "0"],
    [3, 4, 5, 5, 15, 0, "50%", "0"],
    [6, 7, 8, 5, 25, 0, "85%", "0"],
    [0, 3, 6, -5, 15, 90, "50%", "-33%"],
    [1, 4, 7, 5, 15, 90, "50%", "0"],
    [2, 5, 8, 15, 15, 90, "50%", "33%"],
    [0, 4, 8, 5, 15, 45, "50%", "0"],
    [2, 4, 6, 5, 15, 135, "50%", "0"],
];

win.forEach((rishabh) => {
    if (
        boxtext[rishabh[0]].innerText === boxtext[rishabh[1]].innerText &&
        boxtext[rishabh[2]].innerText === boxtext[rishabh[1]].innerText &&
      boxtext[rishabh[0]].innerText !== ""
    ) {
        document.querySelector(".containerinfo").innerText =
        boxtext[rishabh[0]].innerText + " " + "Won";
        allgameover = true;
        document.querySelector("img").style.width = "230px";
        document.querySelector("h1").style.display = "block";
        document.querySelector(".line").style.rotate = rishabh[5] + "deg";
        document.querySelector(".line").style.top = rishabh[6];
        document.querySelector(".line").style.left = rishabh[7];
        document.querySelector(".line").style.width = "100%";
        winmusic.play();
        turn = "";
        audioturn.pause();
    }
});
};


cont.addEventListener("click", function () {
  music.play();
});

// Game Logis
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeturn();
      audioturn.play();
      checkwin();
      if (!allgameover) {
          document.getElementsByClassName("containerinfo")[0].innerText =
          "Turn for " + " " + turn;
      }
    }
  });
});

// For reest button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
    document.querySelector(".line").style.width = "0";
    document.querySelector("img").style.width = "0";
    document.querySelector("h1").style.display = "none";
    document.getElementsByClassName("containerinfo")[0].innerText =
      "Turn for " + " " + turn;
  });
});

// for dark mode
let darkmode = document.querySelector("#dark");
let full = document.getElementsByTagName("body")[0];
let heading = document.querySelector("nav");
darkmode.addEventListener("click", () => {
  darkmode.classList.toggle("active");
  full.classList.toggle("night");
  heading.classList.toggle("heading");
});