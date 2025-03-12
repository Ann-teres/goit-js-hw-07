
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeElem = document.body;
const buttonColorChange = document.querySelector(".change-color")
const colorChange = docment.querySelector(".color")

buttonColorChange.addEventListener("click", () => {

    const randomColor = getRandomHexColor();

  changeElem.style.backgroundColor = randomColor;
  colorChange.textContent = randomColor;
});





