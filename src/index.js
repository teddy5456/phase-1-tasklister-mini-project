const form = document.querySelector('#create-task-form');
const input = document.querySelector('#new-task-description');
const list = document.querySelector('#tasks');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  // create a new list item and add it to the list
  const item = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  span.textContent = input.value;
  button.textContent = 'X';

  item.appendChild(span);
  item.appendChild(button);
  list.appendChild(item);

  // clear the input field
  input.value = '';
});

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    // remove the clicked list item from the list
    event.target.parentNode.remove();
  }
});
