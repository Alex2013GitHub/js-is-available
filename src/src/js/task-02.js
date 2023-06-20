// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// for (let ingredient of ingredients) {
//   const ingredientsEl = document.createElement('li');
//   ingredientsEl.classList.add('item');
//   ingredientsEl.textContent = [ingredient];
//   console.log(ingredientsEl);

//   const itemEl = document.querySelector('#ingredients');

//   itemEl.appendChild(ingredientsEl);
// }

// for (let ingredient of ingredients) {
//   const ingredientElem = document.createElement('li');
//   ingredientElem.classList.add('item');
//   ingredientElem.textContent = [ingredient];

//   const list = document.querySelector('#ingredients');

//   list.appendChild(ingredientElem);

//   console.log(list);
// }

// =================================

const container = document.querySelector('.js-content');
// const nameWinner = document.querySelector('.js-winner');
// let player = 'X';
// let historyX = [];
// let historyO = [];
// const wins = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

function createMarkup() {
  let markup = '';
  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }
  container.innerHTML = markup;
}
createMarkup();

// container.addEventListener('click', onClick);

// function onClick(evt) {
//   const { target } = evt;
//   if (!target.classList.contains('js-item') || target.textContent) {
//     return;
//   }

//   const isEndGame = historyO.length + historyX.length === 9;
//   const id = Number(target.dataset.id);
//   let result = false;
//   if (player === 'X') {
//     historyX.push(id);
//     result = isWinner(historyX);
//   } else {
//     historyO.push(id);
//     result = isWinner(historyO);
//   }
//   target.textContent = player;

//   if (result) {
//     nameWinner.textContent = `Winner ${player} 😎`;
//     setTimeout(() => {
//       resetGame();
//     }, 1500);
//     return;
//   } else if (isEndGame) {
//     nameWinner.textContent = `Try again 😱`;
//     resetGame();
//     return;
//   }
//   player = player === 'X' ? 'O' : 'X';
//   console.log(evt.currentTarget);
//   console.log(evt.target);
// }

// function isWinner(arr) {
//   return wins.some(item => item.every(id => arr.includes(id)));
// }

// function resetGame() {
//   createMarkup();
//   historyX = [];
//   historyO = [];
//   player = 'X';
// }
