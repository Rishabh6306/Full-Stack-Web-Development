let generateBtn = document.getElementById("gbtn");
let clearbtn = document.getElementById("cbtn");

generateBtn.addEventListener("click", () => {
  let min = document.getElementById("min");
  let max = document.getElementById("max");
  let min1 = Number(min.value);
  let max1 = Number(max.value);
  let num = Math.floor(Math.random() * (max1 - min1) + min1);
  document.getElementById("info").innerText = num;
}); 


clearbtn.addEventListener("click", () => {
  document.getElementById("info").innerText = "";
  document.getElementById("min").value = "";
  document.getElementById("max").value = "";
});