import { nanoid } from 'nanoid';
import refs from './js/refs';
import { KEY } from './js/const';
import { saveData } from './js/show-markup';
import { getLocalStorage, setLocalStorage } from './js/LShelpers';
import { deleteEl } from './js/delete-elem';

console.log(refs);

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const submitValue = event.currentTarget.elements.taskName.value.trim();
  if (!submitValue) return;

  addTask(submitValue);

  event.currentTarget.reset();
});

function onSubmit(value, id) {
  const createStr = `<li id="${id}">${value}<button tupe="button">x</button></li>`;
  refs.list.insertAdjacentHTML('beforeend', createStr);
}

function addTask(value) {
  const data = getLocalStorage(KEY) || [];

  const id = nanoid();

  data.push({ value, id });
  onSubmit(value, id);

  setLocalStorage(KEY, data);
}

saveData(KEY, refs.list);
deleteEl(KEY, refs.list);
