let buttons = document.querySelectorAll("#btn");
// Empty string 
let string = "";

// convert all buttons in array and collect it in a form 
let arr = Array.from(buttons);


arr.forEach((button) => {
    button.addEventListener("click", (element)=> {
        // If you press = button 
     if(element.target.innerHTML === "=") {
        // eval funtion evalute your values 
        string = eval(string);
        // kept string's value in input box 
        document.querySelector("input").value = string;
     }
    //  if you press AC button
     else if(element.target.innerHTML === "AC") {
        string = "";
     document.querySelector("input").value = string;
     }
    //  if you press Del button 
     else if (element.target.innerHTML === "Del") {
           string = string.substring(0, string.length-1);
           document.querySelector("input").value = string;
     }
     else {
        console.log(element.target);
        string = string + element.target.innerHTML;
        document.querySelector("input").value = string;
     }
    })
})