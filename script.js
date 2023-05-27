function createPerson(name) {
  const li = document.createElement('li');
  li.innerText = name;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '刪除';

  deleteBtn.addEventListener('click', () => {
    showConfirmationDialog(name, li);
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}

function showConfirmationDialog(name, li) {
  const confirmation = confirm(`確定要刪除 ${name} 嗎？`);
  if (confirmation) {
    li.remove();
  }
}

// function addPerson() {
//   const name = input.value.trim();

//   if (name !== '') {
//     createPerson(name);
//     input.value = '';
//     input.focus();
//   }
// }

// addButton.addEventListener('click', addPerson);
// input.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     addPerson();
//   }
// });

const personNames = ['小明', '小華', '小李'];

personNames.forEach(name => createPerson(name));