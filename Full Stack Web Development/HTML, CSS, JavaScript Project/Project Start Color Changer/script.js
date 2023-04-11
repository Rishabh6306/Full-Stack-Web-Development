const btn = document.getElementById("button");
const colorchanger = () => {
    let value = "0123456789ABCDEF"
    let cons = "#"
    for (let i = 0; i < 6; i++) {
        cons = cons + value[Math.floor(Math.random()*16)];
    }
    return cons;
}

function randomcolorchanger() {
    document.body.style.backgroundColor = colorchanger();
}

document.addEventListener("click", randomcolorchanger);