const paragarph = document.getElementById("textToCopy");
const author = document.getElementById("author");
let button = document.getElementById("btn");
let copyButton = document.getElementById("copy-button");

const quotes = async () => {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();

    // Generate random number 
    let random = Math.floor(Math.random() * data.length);

    paragarph.innerText = data[random].text;

    // check author value is null or not 
    if (data[random].author === null || data[random].author === "") {
      author.innerText = "Unknown~";
    } else {
      author.innerText = `${data[random].author}~`;
    }

    // reset buttons after generate new quotes 
    copyButton.innerHTML = "Copy";
    copyButton.disabled = false;
  } catch (error) {
    console.log(error);
  }
};

// Call the function
quotes();

// Add button generate quotes
button.addEventListener("click", quotes);

// Copy button
function copyText() {
  var text = paragarph.innerText;
  navigator.clipboard.writeText(text);
  copyButton.innerHTML = "Copied";
  copyButton.disabled = true;
}

copyButton.addEventListener("click", copyText);