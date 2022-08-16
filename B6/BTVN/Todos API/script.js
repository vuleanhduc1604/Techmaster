const getTodos = () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos")
};


const deleteBtn = document.querySelector('.delete');
const wrapper = document.querySelector('.todo-wrapper')

const createTodo = ( {title, completed} ) => {
    const todoWrapper = document.createElement('div');
    todoWrapper.classList.add('todo-wrapper');
    const deleteEle = document.createElement('span');
    deleteEle.classList.add('delete');
    deleteEle.textContent = "X";
    const titleEle = document.createElement('p');
    titleEle.classList.add('title');
    titleEle.textContent = title;
    if (completed) {
        todoWrapper.classList.add('completed');
    }
    deleteEle.addEventListener('click', function() {
        todoWrapper.style.display = 'none';
    });
    todoWrapper.appendChild(deleteEle);
    todoWrapper.appendChild(titleEle);
    return todoWrapper;
};

const renderTodo = async () => {
    try {
        const { data } = await getTodos();
        console.log(data)
        const todos = data.map(createTodo);

        document.querySelector('.todos-list').append(...todos);
    } catch (error) {
        console.log(error)
    }
}

renderTodo();
