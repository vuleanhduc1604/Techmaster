import { getuser } from "./api.js";
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