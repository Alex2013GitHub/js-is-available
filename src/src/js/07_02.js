const input = document.querySelector('.ls-search');

// input.addEventListener(
//     "input",
//     _.throttle(handleInput, 1000, {
//         trailing: false,
//         leading: true,
//     })
// )

// input.addEventListener(
//   'input',
//   _.debounce(handleInput, 1000, {
//     trailing: true,
//     leading: false,
//   }),
// );
// function handleInput(event) {
//   console.log(event);
// }

// ========================

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

const combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];

const historyX = [];
const historyO = [];

let player = 'X';

const content = document.querySelector('.content');

content.addEventListener('click', handleClick);

createMarkup();

// функція створення поля
function createMarkup() {
  let markup = '';
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  content.innerHTML = markup;
}

function handleClick(event) {
  if (event.target.textContent || event.target === event.currentTarget) {
    // вихід з функції якщо комірка зайнята, або якщо ми клікнули не на комірку
    return;
  }

  const id = Number(event.target.dataset.id);
  let isWinner = false;

  if (player === 'X') {
    // логіка гравця крестик
    historyX.push(id); // додаємо клітинку в історію
    isWinner = historyX.length >= 3 ? checkWinner(historyX) : false;
  } else {
    // логіка гравця нулик
    historyO.push(id); // додаємо клітинку в історію
    isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
  }

  if (isWinner) {
    // якщо ми перемогли - показуємо модальне вікно
    const instance = basicLightbox.create(`
      <div class="box">
        <h1>Player ${player} is winner!</h1>
      </div>
    `);
    instance.show();
    resetGame();
    return;
  }

  event.target.textContent = player; // записати в комірець X або O
  player = player === 'X' ? 'O' : 'X'; // змінюємо гравця на наступний хід
}

function checkWinner(history) {
  // combination -> some -> every -> includes
  return combination.some(item => item.every(id => history.includes(id)));
  // перевіряємо наявність усіх айді які є успішними комбінаціями всередині нашої історії
}

function resetGame() {
  createMarkup();
  player = 'X';
  historyX.splice(0);
  historyO.splice(0);
}
