const form = document.querySelector('#task-form');

console.log(form);

form.addEventListener('submit', event => {
  event.preventDefault();

  const submitValue = event.currentTarget.elements.taskName.value.trim();
  if (!submitValue) return;
  console.dir(event.currentTarget.elements.taskName.value);
  event.currentTarget.reset();
});
