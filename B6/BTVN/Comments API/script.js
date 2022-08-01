const getComments = () => {
    return axios.get("https://jsonplaceholder.typicode.com/comments")
}

const createComment = ({name, email, body}) => {
    const commentWrapper = document.createElement('div');
    commentWrapper.classList.add('comment-wrapper');
    const mailWrapper = document.createElement('div');
    mailWrapper.classList.add('mail-wrapper');
    const mailEle = document.createElement('p');
    mailEle.classList.add('mail');
    mailEle.textContent = email;
    const nameWrapper = document.createElement('div');
    nameWrapper.classList.add('name-wrapper')
    const nameEle = document.createElement('p');
    nameEle.classList.add('name');
    nameEle.textContent = name;
    const bodyWrapper = document.createElement('div');
    bodyWrapper.classList.add('body-wrapper');
    const bodyEle = document.createElement('p');
    bodyEle.classList.add('body');
    bodyEle.textContent = body;
    mailWrapper.appendChild(mailEle);
    nameWrapper.appendChild(nameEle);
    bodyWrapper.appendChild(bodyEle);
    commentWrapper.appendChild(nameWrapper);
    commentWrapper.appendChild(mailWrapper);
    commentWrapper.appendChild(bodyWrapper);
    return commentWrapper;
};

const renderComment = async () => {
    try {
        const { data } = await getComments();
        const comments = data.map(createComment);
        document.querySelector('.comment-list').append(...comments);
    } catch (error) {
        console.log(error);
    }
};

renderComment();