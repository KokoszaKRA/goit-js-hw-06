const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");

const listItem = ingredients.map(el => {
  const newItem = document.createElement("li");
  newItem.textContent = el ;
  newItem.classList.add("item");
return newItem;
});

list.append(...listItem);


