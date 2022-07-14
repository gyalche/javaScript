const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector('.todo-list');
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //   console.log(todoInput.value);
  const newTodoText = todoInput.value;
  const newLi = document.createElement('li');
  const newLiInnerHTML = ` 
                <span class="text">${newTodoText}</span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>
            `;
  newLi.innerHTML = newLiInnerHTML;
  //   console.log(newLi);
  todoList.append(newLi);
  todoInput.value = '';
});

todoList.addEventListener('click', (e) => {
  //check if user clicked on done button;
  if (e.target.classList.contains('done')) {
    // console.log('you added');
    const liSpan = e.target.parentNode.previousElementSibling;
    // console.log(liSpan);
    liSpan.style.textDecoration = 'line-through';
  }
  if (e.target.classList.contains('remove')) {
    // console.log('you removed me ');
    const targetedLi = e.target.parentNode.parentNode;
    console.log(targetedLi);
    targetedLi.remove();
  }
});
