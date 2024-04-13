import { getLocalStorage, setLocalStorage } from './LShelpers';

export function deleteEl(KEY, list) {
  list.addEventListener('click', handleClick);

  function handleClick(event) {
    const deleteLi = event.target;
    if (deleteLi.nodeName !== 'BUTTON') return;

    const data = getLocalStorage(KEY);

    const updateData = data.filter(({ id }) => id !== deleteLi.parentNode.id);
    setLocalStorage(KEY, updateData);

    deleteLi.parentNode.remove();
  }
}
