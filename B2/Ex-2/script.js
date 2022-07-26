const todos = [
    {
    id: 1,
    completed: true,
    content: "Learning HTML"
    },
    {
    id: 2,
    completed: true,
    content: "Learning CSS"
    },
    {
    id: 3,
    completed: false,
    content: "Learning JavaScript"
    }
];
const app = document.querySelector('#app');
function createToDoItem(todo) {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.textContent = todo.content;
    if (todo.completed) {
        div.classList.add('completed')
    }
    return div;
}

function createToDoList(todos) {
    const list = document.createElement('div');
    list.classList.add('todo-list');
    todos.forEach(
        function(todo) {
            list.append(createToDoItem(todo));
        }
    )
    return list;
}
app.append(createToDoList(todos));