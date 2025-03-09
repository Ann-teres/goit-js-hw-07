const inputName = document.querySelector("#name-input")
const outputName = document.querySelector("#name-output")

outputName.addEventListener("input", () => {

   outputName.textContent = nameInput.value.trim() || "Anonymous";
     
})