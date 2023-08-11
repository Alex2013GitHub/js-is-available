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

// ===========================
const refs = {
  bodyEl: document.querySelector('body'),
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};

refs.buttons.addEventListener('click', startBtnClick);
refs.buttons.addEventListener('click', stopBtnClick);

let timerId = null;

function startBtnClick() {
  intervalId = setInterval(() => {
    timerId += 1;
    const onHexChangecolor = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = onHexChangecolor;
  }, 1000);
  disabledButtons();
}

function disabledButtons() {
  if (!refs.startButton.disabled) {
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;
  } else {
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;
  }
}

function stopBtnClick() {
  clearInterval(intervalId);
  disabledButtons();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}