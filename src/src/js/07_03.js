// 1. создать маркированый список

const listofElem = document.createElement('ul');
const addBtn = document.createElement('button');
addBtn.classList.add('btn-add');
addBtn.textContent = 'Add';

const removeBtn = document.createElement('button');
removeBtn.classList.add('btn-remove');
removeBtn.textContent = 'Remove';

const inputRef = document.createElement('input');

const containerRef = document.querySelector('.container');

containerRef.append(inputRef, removeBtn, addBtn, listofElem);

console.log(containerRef);

addBtn.addEventListener('click', onAddButtonClick);
removeBtn.addEventListener('click', onRemoveBtnClick);

function onAddButtonClick() {
  const itemRef = document.createElement('li');
  //   itemRef.textContent = inputRef.value ? inputRef.value : 'Nothing';
  itemRef.textContent = inputRef.value || 'Nothing';
  listofElem.appendChild(itemRef);
  const itemCountRef = listofElem.children.length;
  itemRef.classList.add(itemCountRef % 2 ? 'odd' : 'event');
}

function onRemoveBtnClick() {
  if (!listofElem.lastChild) {
    return;
  }
  listofElem.removeChild(listofElem.lastChild);
}
