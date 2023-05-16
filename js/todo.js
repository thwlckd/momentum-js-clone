const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODO_KEY = 'todos';
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    localStorage.removeItem(TODO_KEY);
    saveToDos();
}
function paintToDo(newToDo) {
    const li = document.createElement('li');
    li.id = newToDo.id;
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleTodoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleTodoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}