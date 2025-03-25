// Change text content dynamically
const changeTextButton = document.getElementById('changeTextButton');
const textContent = document.getElementById('textContent');

changeTextButton.addEventListener('click', () => {
  textContent.textContent = "The text has been changed!";
});

// Modify CSS styles dynamically
const toggleStyleButton = document.getElementById('toggleStyleButton');

toggleStyleButton.addEventListener('click', () => {
  if (textContent.style.color === 'blue') {
    textContent.style.color = 'black';
    textContent.style.fontWeight = 'normal';
  } else {
    textContent.style.color = 'blue';
    textContent.style.fontWeight = 'bold';
  }
});

// Add or remove an element when a button is clicked
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');
const newElementContainer = document.getElementById('newElementContainer');

addElementButton.addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = "This is a newly added paragraph!";
  newElementContainer.appendChild(newElement);
});

removeElementButton.addEventListener('click', () => {
  const lastElement = newElementContainer.lastElementChild;
  if (lastElement) {
    newElementContainer.removeChild(lastElement);
  }
});
