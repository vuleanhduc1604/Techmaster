import { getuser, changeName, changeAvatar } from "./api.js";
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

// Modal Name change appear
let btnName = document.querySelector(".submit-name");
let modalName = document.querySelector(".modal-name");
let spanName = document.querySelector('.text-name');
btnName.addEventListener('click', function() {
    modalName.style.display = 'block';
});
spanName.addEventListener('click', function() {
    modalName.style.display = 'none';
});
window.addEventListener('click', function(e) {
    if (e.target == modalName) {
        modalName.style.display = 'none';
    }
})

// Modal Avatar change appear
let btnAvatar = document.querySelector(".submit-avatar");
let modalAvatar = document.querySelector(".modal-avatar");
let spanAvatar = document.querySelector('.text-avatar');
btnAvatar.addEventListener('click', function() {
    modalAvatar.style.display = 'block';
});
spanAvatar.addEventListener('click', function() {
    modalAvatar.style.display = 'none';
});
window.addEventListener('click', function(e) {
    if (e.target == modalName) {
        modalAvatar.style.display = 'none';
    }
})

// Submit name change
let formName = document.querySelector('.changeName');
formName.addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstname = formName.elements.firstname.value;
    const lastname = formName.elements.lastname.value;

    try {
        const {data, headers} = await changeName({firstname, lastname});

        alert("Name changed");
        location.reload();
    } catch (err) {
        console.log(err);
        alert('Something went wrong. Please try again');
    }
});

// Submit avatar change
let formAvatar = document.querySelector('.changeAvatar');
formAvatar.addEventListener('submit', async (f) => {
    f.preventDefault();

    const avatarFile = formAvatar.elements.avatar;

    try {
        const {data, headers} = await changeAvatar({avatarFile});

        alert('Avatar changed');
        location.reload()
    } catch (err) {
        console.log(err);
    }
});

// Sign out
let signoutBtn = document.querySelector('.sign-out-btn');
signoutBtn.addEventListener('click', () => {
    localStorage.clear('token');
    window.location.href = 'signin.html'
});

// Back to Todo
let backtoTodoBtn = document.querySelector('.goback-btn');
backtoTodoBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
})