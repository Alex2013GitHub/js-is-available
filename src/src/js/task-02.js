const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let ingredient of ingredients) {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = [ingredient];
  console.log(ingredientsEl);

  const itemEl = document.querySelector('#ingredients');

  itemEl.appendChild(ingredientsEl);
}
