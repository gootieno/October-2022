// Your code here

window.addEventListener('DOMContentLoaded', () => {
  // alert('DOM has loaded');


  const redInput = document.getElementById('red-input');

  const changeRed = e => {
    const value = e.target.value;

    if (value === 'red') {
      redInput.style.backgroundColor = 'red'
    } else {
      redInput.style.backgroundColor = 'transparent'
    }
  }

  redInput.addEventListener('input', changeRed);


  const addItem = document.getElementById('add-item');
  const ul = document.querySelector('ul');
  const input = document.getElementById('list-add');

  const addLi = e => {
    const value = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = value;
    ul.append(newLi);
    input.value = '';
  }

  addItem.addEventListener('click', addLi);

  const color = document.getElementById('color-select');
  const section = document.getElementById('section-3');

  const changeColor = e => {
    console.log(e)
    section.style.backgroundColor = e.target.value;
  }

  color.addEventListener('input', changeColor)

  const removeListeners = document.getElementById('remove-listeners');

  removeListeners.addEventListener('click', e => {
    redInput.removeEventListener('input', changeRed);
    addItem.removeEventListener('click', addLi);
    color.removeEventListener('input', changeColor)
  })
})
