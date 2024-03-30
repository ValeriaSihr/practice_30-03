import { nanoid } from 'nanoid'

const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');
const KEY = 'task';
console.log(form);

list.addEventListener("click", handleClick);

function handleClick(event){
  const deliteLi = event.target;
  if (deliteLi.nodeName !== "BUTTON") return;

  const data = JSON.parse(localStorage.getItem(KEY));
  
  const updateData = data.filter(({ id }) => id !== deliteLi.parentNode.id);
  localStorage.setItem(KEY, JSON.stringify(updateData));

  deliteLi.parentNode.remove();
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const submitValue = event.currentTarget.elements.taskName.value.trim();
  if (!submitValue) return;
  console.dir(event.currentTarget.elements.taskName.value);
  addTask(submitValue);

  event.currentTarget.reset();
});

function onSubmit(value, id) {
  const createStr = `<li id="${id}">${value}<button tupe="button">x</button></li>`;
  list.insertAdjacentHTML('beforeend', createStr);
}

function addTask(value) {
  const data = JSON.parse(localStorage.getItem(KEY)) || [];

  const id = nanoid();
  
  data.push({ value, id });
  onSubmit(value, id);
  
  localStorage.setItem(KEY, JSON.stringify(data));
}

function saveData() {
  const saveToLs = JSON.parse(localStorage.getItem(KEY));
  if (!saveToLs) return;

  const createMarkup = saveToLs
    .map(({value, id}) => {
      return `<li id="${id}">${value}<button tupe="button">x</button></li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', createMarkup);
}
saveData();