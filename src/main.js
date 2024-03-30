const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');

console.log(form);

form.addEventListener('submit', event => {
  event.preventDefault();

  const submitValue = event.currentTarget.elements.taskName.value.trim();
  if (!submitValue) return;
  console.dir(event.currentTarget.elements.taskName.value);
  onSubmit(submitValue);

  event.currentTarget.reset();
});

function onSubmit(value) {
  const createStr = `<li>${value}</li>`;
  list.insertAdjacentHTML("beforeend", createStr);
}