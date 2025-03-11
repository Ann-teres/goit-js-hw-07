
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeElem = document.querySelector(".body")
const buttonColorChange = document.querySelector(".change-color")
const colorChange = docment.querySelector(".color")

btnChangeColorElem.addEventListener("click", () => {

    const random = getRandomHexColor();

  changeElem.style.backgroundColor = randomColor;
  colorChange.textContent = randomColor;
});


