const board = document.querySelector("#board");
const squares_number = 500;
const colors = ["red", "blue", "green", "yellow", "pink"];

for(let i = 0; i < squares_number; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));

    square.addEventListener("mouseleave", () => removeColor(square));
    
    board.append(square);
}

function setColor (elem) {
    // elem.style.backgroundColor = getRandomColor();
    const color = col();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor (elem) {
    elem.style.backgroundColor = "#1d1d1d";
    elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
}

function col() {
    let r = Math.floor(Math.random() * 225);
    let g = Math.floor(Math.random() * 80);
    let b = Math.floor(Math.random() * 190);
    return `rgb(${r},${g},${b})`;
}