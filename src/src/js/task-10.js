const containerControls = document.getElementById('controls');
const createBtn = containerControls.querySelector('button[data-create]');
const destroyBtn = containerControls.querySelector('button[data-destroy]');
const boxesControls = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
function createBoxes() {
  const amount = +containerControls.querySelector('input').value;
  let boxes = [];

  for (let i = 0; i < amount; i++) {
    const boxesItem = document.createElement('div');
    const size = 30 + i * 10;
    const bgColor = getRandomHexColor();

    boxesItem.style.width = `${size}px`;
    boxesItem.style.height = `${size}px`;
    boxesItem.style.backgroundColor = bgColor;

    boxes.push(boxesItem);

    console.log(amount);
  }
  boxesControls.append(...boxes);
}
function destroyBoxes() {
  boxesControls.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
