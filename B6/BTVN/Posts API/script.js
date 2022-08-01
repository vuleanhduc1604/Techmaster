const getPosts = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
}

const createPostCard = ({ title, body }) => {
    const card = document.createElement('div');
    card.classList.add('post-card');
    const titleEle = document.createElement('div');
    titleEle.classList.add("post-title");
    titleEle.textContent = title;
    const bodyEle = document.createElement('div');
    bodyEle.classList.add('post-body');
    bodyEle.textContent = body;
    card.appendChild(titleEle);
    card.appendChild(bodyEle);
    return card;
};

const renderPosts = async() => {
    try {
        const { data } = await getPosts();

        const posts = data.map(createPostCard);

        document.querySelector('.post-list').append(...posts);
    } catch (error) {
        console.log(error);
    }
}

renderPosts();