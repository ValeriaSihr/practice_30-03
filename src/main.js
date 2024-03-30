const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');
const KEY = 'task';
console.log(form);

form.addEventListener('submit', event => {
  event.preventDefault();

  const submitValue = event.currentTarget.elements.taskName.value.trim();
  if (!submitValue) return;
  console.dir(event.currentTarget.elements.taskName.value);
  onSubmit(submitValue);
  addTask(submitValue);

  event.currentTarget.reset();
});

function onSubmit(value) {
  const createStr = `<li>${value}</li>`;
  list.insertAdjacentHTML('beforeend', createStr);
}

function addTask(value) {
  const data = JSON.parse(localStorage.getItem(KEY)) || [];
  data.push(value);
  localStorage.setItem(KEY, JSON.stringify(data));
}

function saveData() {
  const saveToLs = JSON.parse(localStorage.getItem(KEY));
  if (!saveToLs) return;

  const createMarkup = saveToLs
    .map(value => {
      return `<li>${value}</li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', createMarkup);
}
saveData();
