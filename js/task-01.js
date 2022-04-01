
console.log("Number of categories: " + document.querySelector("#categories").children.length)
const elements = document.querySelectorAll(".item>ul")
elements.forEach((el=>console.log("Elements: "+el.children.length + " Category: "+el.previousElementSibling.textContent )))