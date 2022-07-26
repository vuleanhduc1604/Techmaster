import { createTask, getuser, getTask, deleteTask } from "./api.js";
// Swtich to profile.html
document.getElementById('user-info-wrapper').addEventListener('click', () => {
    window.location.href = "profile.html";
});
// Modal appear
let btn = document.querySelector(".createbtn");
let modal = document.querySelector(".modal");
let span = document.querySelector('.text');
btn.addEventListener('click', function() {
    modal.style.display = 'block';
});
span.addEventListener('click', function() {
    modal.style.display = 'none';
});
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})

// Submit task
let formTask = document.querySelector('.createtask');
formTask.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = formTask.elements.titleContent.value;

    try {
        const { data, headers } = await createTask({title});
        alert('Task created');
        location.reload();
    } catch (err) {
        console.log(err);
        alert('Task phải có tối thiểu 2 từ')
    }
});

// Profile loader
const loadProfile = async () => {
    const loadprofileCard = (firstname, lastname, src) => {
        let profileWrapper = document.querySelector('#user-info-wrapper');
        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        userInfo.classList.add('flex');
        const userAvatarWrapper = document.createElement('div');
        userAvatarWrapper.classList.add('user-avatar-wrapper');
        const avatar = document.createElement('img');
        avatar.classList.add('user-avatar');
        avatar.src = `https://todo-api-with-auth.herokuapp.com${src}`;
        const usernameWrapper = document.createElement('div');
        usernameWrapper.classList.add('username-wrapper');
        const username = document.createElement('span');
        username.classList.add('username');
        username.innerHTML = `${firstname} ${lastname}`
        usernameWrapper.appendChild(username);
        userAvatarWrapper.appendChild(avatar);
        profileWrapper.appendChild(userAvatarWrapper);
        profileWrapper.appendChild(usernameWrapper);
        return userInfo;
    };  
    try {
        const { data, headers } = await getuser();
        loadprofileCard(data.data.firstname, data.data.lastname, data.data.avatar);
    } catch (err) {
        console.log(err);
    }
};

loadProfile();

// Render tasks
const createTodo = ( {title, completed, id} ) => {
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
    deleteEle.addEventListener('click', async function() {
        todoWrapper.style.display = 'none';
        try {
            const {data, header} = await deleteTask(id);
            alert("Deleted successfully");
        } catch (err) {
            console.log(err)
        }
    });
    todoWrapper.addEventListener('click', () => {
        todoWrapper.classList.toggle("checked-todo-wrapper");
        todoWrapper.classList.toggle("todo-wrapper");
        titleEle.classList.toggle("checked-text");
    });
    todoWrapper.appendChild(deleteEle);
    todoWrapper.appendChild(titleEle);
    return todoWrapper;
};

const renderTodo = async () => {
    try {
        const {data, header} = await getTask();
        console.log(data);
        const todos = data.data.map(createTodo);
        document.querySelector('.todolist').append(...todos);
    } catch (err) {
        console.log(err);
        alert('Something went wrong. Please try again')
    }
}

renderTodo();

