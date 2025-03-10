const inputName = document.querySelector("#name-input")
const outputName = document.querySelector("#name-output")

outputName.addEventListener("input", () => {

  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue || "Anonymous";
     
})