// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens

// function selectColor(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const selectColor = event.target.dataset.color;
//   output.textContent = `Selected color: - ${selectColor}`;
//   output.style.color = selectColor;
// }

// Some helper functions to render palette items

// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, '0');
// }

// <!-- 2 ===================== -->

// 1. отримати всі рефси(фщрма, спан, тотал)
// 2. повісити слухач подію по шнпуту на всю форму
// 3. реалізувати ренж
// 3.1.отримати value ренжу і записати його у спан
// 4. створимо обєкт у якому збережемо ціну і кількість

const refs = {
  form: document.getElementById('form'),
  amount: document.getElementById('amount'),
  total: document.getElementById('total'),
};

const data = {
  price: 0,
  amount: 0,
  calcTotalPrice() {
    return (this.price * this.amount).toFixed(2);
  },
};

fillData();
setAmount();
displayTotal();

refs.form.addEventListener('input', onInput);

function onInput({ target }) {
  if (target.name === 'quantity') {
    setAmount();
  }
  fillData();
  displayTotal();
}

function displayTotal() {
  refs.total.textContent = `${data.calcTotalPrice()}грн;`;
}

function fillData() {
  data.price = refs.form.elements.price.value;
  data.amount = refs.form.elements.quantity.value;
}

function setAmount() {
  refs.amount.textContent = refs.form.elements.quantity.value;
}

//  3 ==============
