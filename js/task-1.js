const ulAtributes = document.querySelector("#categories")
const allCategoriesElem = ulAtributes.querySelectorAll(".item")
console.log(`Number of categories: ${allCategorieElem.length}`);

const allH = allCategoriesElem.querySelectorAll("h2")

allH.forEach((item, i) => {
     console.log(`Category: ${elem.textContent}`);
  console.log(`Elements: ${allCategoriesElem[i].querySelectorAll("li").length}`)
}) 
