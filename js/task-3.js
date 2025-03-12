const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", () => {

  const trimmedValue = inputName.value.trim();
  outputName.textContent = trimmedValue || "Anonymous";
     
}); 