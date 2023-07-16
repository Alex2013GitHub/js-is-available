const inputEl = document.querySelector('input');
const buttonGreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

buttonGreate.addEventListener('click', handlerGreateClick);
buttonDestroy.addEventListener('click', handlerDestroyClick);

function handlerGreateClick() {
  const inputValue = Number(inputEl.value);
  boxesEl.innerHTML = '';

  createBoxes(inputValue);
}

function handlerDestroyClick() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}

function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeight = 30;
  const boxesArray = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
    boxWidth += 10;
    boxHeight += 10;
  }
  boxesEl.append(...boxesArray);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
