const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients")
let item
ingredients.forEach((el) =>{
    item = document.createElement("li");
  item.textContent = el;  
  list.append(item);
  item.classList.add("item")

});

