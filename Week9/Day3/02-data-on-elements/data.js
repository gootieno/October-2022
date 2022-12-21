// Your code here
window.addEventListener('DOMContentLoaded', () => {

  const shoppingList = document.getElementById('shopping-list')
  const button = document.getElementById('add');

  button.addEventListener('click', e => {
    e.preventDefault();
    const newLi = document.createElement('li');
    const input = document.getElementById('name');
    const dataType = document.getElementById('type');
    const inputValue = input.value;
    console.log(input);
    const data = dataType.value;

    newLi.innerText = inputValue;
    newLi.setAttribute('data-type', data);

    shoppingList.append(newLi);
  })

})
