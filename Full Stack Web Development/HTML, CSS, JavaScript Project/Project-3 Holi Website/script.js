let music = new Audio("music.mp3");

// let holisong = document.getElementsByTagName("button");

// let button = document.getElementsByClassName("btn");
btn.addEventListener("click", () => {
     music.play(); 
     document.querySelector("div").style.display = "block";
     document.getElementById("btn").style.display = "none";
})


