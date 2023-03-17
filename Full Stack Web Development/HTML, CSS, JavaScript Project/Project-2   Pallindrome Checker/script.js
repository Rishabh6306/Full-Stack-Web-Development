// Select all items by its id , class or tag
let inputvalue = document.querySelector(".inputs input");
let checkbtn = document.querySelector(".inputs button");
let inforamtion = document.querySelector(".info");

// suppose one empty variable
let Input;

// call the function for checking  it's palindrome or not
checkbtn.addEventListener("click", () => {
  let reverseoutput = Input.split("").reverse().join("");
  if (Input != reverseoutput) {
    return (inforamtion.innerHTML = `No, <span>'${inputvalue.value}'</span> is not a palindrome!`);
  } else {
    inforamtion.innerHTML = `Yes, <span>'${inputvalue.value}'</span> is a palindrome!`;
  }
});

// call the function for input value
inputvalue.addEventListener("keyup", () => {
  Input = inputvalue.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  // ^A-Z0-9]/ig, "" it is a shortcut in this shortcut means A to Z and 0-9 and also remove the space and ig me i means matlab case-insensitive (i) and g means match all charactes not the first one and all values return in lowercase
  if (Input) {
    return checkbtn.classList.add("active");
  }
  return checkbtn.classList.remove("active");
});




// This comment is for line Number 21;


//     Aapko string pe ek for loop lagana padega

// Aur use A-Z aur 0-9 se check karna padega

// Aur fir replace karna hoga
//     Ise regular expressions bolte h

// A-Z0-9 matlab sab alphanumeric characters

// ig flags hote h

// i matlab case-insensitive (i)

// g matlab sab characters ko match karo not just the first one