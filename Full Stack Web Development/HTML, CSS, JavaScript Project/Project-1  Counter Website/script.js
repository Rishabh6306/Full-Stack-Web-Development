let value = document.getElementById("space");
let  increament = document.getElementById("add");
let decrement = document.getElementById("substract");
let resetvalue = document.getElementById("rese");


increament.addEventListener("click", () => {
    const absorbvalue = Number(value.innerText);
    if (absorbvalue < 20 ) {
        value.innerText = absorbvalue + 1;
    }
    else {
        alert("20 + values are not allowed");
    }
});



decrement.addEventListener("click", () => {
    const absorbvalue = Number(value.innerText);
    if (absorbvalue > -20 ) {
            value.innerText = absorbvalue - 1;
    }
    else {
        alert("-20 + values are not allowed");
    }
})


resetvalue.addEventListener("click", () => {
    value.innerText = 0;
})