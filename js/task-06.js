
const input =document.querySelector("#validation-input")
const InputChangeClass = (remove, add) => {    
    input.classList.remove(remove);
    input.classList.add(add);    
};

input.addEventListener("blur", () => {  
    if (input.value.length !== +input.getAttribute("data-length")) {        
        InputChangeClass("valid", "invalid")
    } else {
        InputChangeClass("invalid", "valid")         
    }
});
