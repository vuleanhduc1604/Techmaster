import { createTask, getuser } from "./api.js";

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
    } catch (err) {
        console.log(err);
        alert('Something went wrong. Please try again')
    }
});

const loadProfile = async () => {
    const loadprofileCard = (firstname, lastname) => {
        let profileWrapper = document.querySelector('#user-info-wrapper');
        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        userInfo.classList.add('flex');
        const userAvatarWrapper = document.createElement('div');
        userAvatarWrapper.classList.add('user-avatar-wrapper');
        const avatar = document.createElement('img');
        avatar.classList.add('user-avatar');
        avatar.src = "avatar-test.jpeg";
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
        loadprofileCard(data.data.firstname, data.data.lastname);
    } catch (err) {
        console.log(err);
        alert('Something went wrong. Reload the page or log out')
    }
};

loadProfile();