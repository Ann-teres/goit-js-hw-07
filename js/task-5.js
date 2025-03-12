
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

  changeElem.style.backgroundColor = random;
  colorChange.textContent = random;
});





