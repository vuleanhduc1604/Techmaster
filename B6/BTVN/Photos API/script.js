const getAlbums = () => {
    return axios.get("https://jsonplaceholder.typicode.com/photos");
};

const createAlbumCard = ({url, title}) => {
    const albumWrapper = document.createElement('div');
    albumWrapper.classList.add('album-wrapper');
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img-wrapper');
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = url;
    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = title;
    imgWrapper.appendChild(img);
    albumWrapper.appendChild(imgWrapper);
    albumWrapper.appendChild(desc);
    return albumWrapper;
};


const renderAlbum = async () => {
    try {
        const { data } = await getAlbums();

        const albums = data.map(createAlbumCard);

        document.querySelector('.album-list').append(...albums);
    } catch (error) {
        console.log(error);
    }
}

renderAlbum();