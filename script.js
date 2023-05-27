const list = document.getElementById('list');

function createPerson(name) {
  const li = document.createElement('li');
  li.innerText = name;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '刪除';
  deleteBtn.addEventListener('click', () => {
    li.classList.add('fade-out');
    setTimeout(() => {
      li.remove();
    }, 300);
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}

const personNames = ['小明', '小華', '小李'];

personNames.forEach(name => createPerson(name));
