import { getLocalStorage } from './LShelpers';

export function saveData(key, list) {
  const saveToLs = getLocalStorage(key);
  if (!saveToLs) return;

  const createMarkup = saveToLs
    .map(({ value, id }) => {
      return `<li id="${id}">${value}<button tupe="button">x</button></li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', createMarkup);
}
