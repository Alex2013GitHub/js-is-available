// const counCategori = document.querySelectorAll('.item');
// console.log(`Number of categories: ${counCategori.length}`);

// for (const item of counCategori) {
//   console.log(`Category: ${item.firstElementChild.textContent} `);
//   const countItems = item.querySelectorAll('li');
//   console.log(`Elements: ${countItems.length}`);
// }

const list = document.querySelector('#categories');

console.log('Number of categories: ', list.children.length);

[...list.children].forEach(el => {
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Element:', el.lastElementChild.children.length);
});
