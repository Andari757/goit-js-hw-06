function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input[type=number]")
const boxes = document.querySelector("#boxes")
const createBoxes = document.querySelector("[data-create]") 
const deleteBoxes = document.querySelector("[data-destroy]") 
let counter=0;
createBoxes.addEventListener("click", () => {  
  for (let i = 1; i <= input.value; i++) {    
    const box =
    document.createElement("div")
    box.style.height =30+ counter  +"px"
    box.style.width =30+ counter  + "px"    
    box.style.backgroundColor = getRandomHexColor()
    boxes.append(box)
    counter+=10
  }
})
deleteBoxes.addEventListener("click", () => { 
  while (boxes.firstChild) {      
    boxes.removeChild(boxes.firstChild)    
  }
  counter = 0
})