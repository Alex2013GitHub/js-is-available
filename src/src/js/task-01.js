const counCategori = document.querySelectorAll('.item');
console.log(`Number of categories: ${counCategori.length}`);

for (const item of counCategori) {
  console.log(`Category: ${item.firstElementChild.textContent} `);
  const countItems = item.querySelectorAll('li');
  console.log(`Elements: ${countItems.length}`);
};
