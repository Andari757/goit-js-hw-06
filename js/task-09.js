function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bg=document.querySelector(".widget")
const magicButton = document.querySelector(".change-color")
const hex = document.querySelector(".color")
magicButton.addEventListener("click", () => {
  bg.style.backgroundColor = getRandomHexColor();
    hex.textContent = getRandomHexColor() ;
    
    
}
)