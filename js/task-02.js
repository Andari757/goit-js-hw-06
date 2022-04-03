const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients")
const toInsert = ingredients.map(el =>`<li class="item">${el}</li>`)
  .join("");
list.insertAdjacentHTML("afterbegin",toInsert);
