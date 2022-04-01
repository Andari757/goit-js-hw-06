let counterValue = 0;
const value = document.querySelector("#value")
const decrease = document.querySelector('[data-action="decrement"]')
const increase = document.querySelector('[data-action="increment"]')
increase.addEventListener('click', () => { 
    counterValue += 1    
    value.innerHTML = counterValue
})
    decrease.addEventListener('click', () => { 
    counterValue -= 1    
    value.innerHTML = counterValue
    })