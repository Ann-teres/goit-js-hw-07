
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeElem = document.body;
const buttonColorChange = document.querySelector(".color")
const colorChange = docment.querySelector(".change-color")

btnChangeColorElem.addEventListener("click", () => {

    const random = getRandomHexColor();

  changeElem.style.backgroundColor = randomColor;
  colorChange.textContent = randomColor;
});





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});