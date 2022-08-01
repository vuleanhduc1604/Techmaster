const getAlbums = () => {
    return axios.get('https://jsonplaceholder.typicode.com/albums')
};

const createAlbumCard = ({userId, title}) => {
    const albumWrapper = document.createElement('div');
    albumWrapper.classList.add('album-wrapper');
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img-wrapper');
    const img = document.createElement('img');
    img.classList.add('img');
    const titleEle = document.createElement('span');
    titleEle.classList.add('title');
    titleEle.textContent = title;
    if (userId == 1) {
        img.src = 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.18169-9/13494967_1113187048724341_1591176538557973537_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=13-_oldCuYQAX_4e1AW&_nc_ht=scontent.fhan3-1.fna&oh=00_AT9SPqbIzyXQGvUDXJPmrt2fT-_su3fZbNe6lQnCYatXHg&oe=630CABB2';
    } else if (userId == 2) {
        img.src = 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/13450908_1113187248724321_2389744507414692846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=PJxXfw5zf3kAX8GowBL&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-QJrccuvGpQtfPUm1jLbQWYr0iJPB-Xppys6B2ZgYAfw&oe=630E7266'
    } else if (userId == 3) {
        img.src = 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/13501641_1113187225390990_5531263510968411312_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=8t-fhwxRAYMAX_6rKMW&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-LluXCsYswVBjm98w-ZHeeaRBA7GzYoJM430ep7AHPOg&oe=630D676A'
    } else if (userId == 4) {
        img.src = 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/13501641_1113187225390990_5531263510968411312_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=8t-fhwxRAYMAX_6rKMW&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-LluXCsYswVBjm98w-ZHeeaRBA7GzYoJM430ep7AHPOg&oe=630D676A'
    } else if (userId == 5) {
        img.src = 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.18169-9/13501960_1113187178724328_8352199357084670413_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=siR20Ysy4l0AX88dhBP&tn=Ar4McEkDbql33bI9&_nc_ht=scontent-hkt1-2.xx&oh=00_AT-1viv0RSXkirRU64rEhS7uhIBXGXiS_BZ5znlVN6FURw&oe=630E6596'
    } else if (userId == 6) {
        img.src = 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.18169-9/13495178_1113187152057664_4433962843313533283_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=1ItKbznrUvcAX-wJkvr&tn=Ar4McEkDbql33bI9&_nc_ht=scontent-hkt1-2.xx&oh=00_AT9t35mFB3QVceSxdxjdwqLndTcS84Q6SX-hjGqGW4Ioeg&oe=630C21F0'
    } else if (userId == 7) {
        img.src = 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/13507146_1113187135390999_3970396137033926700_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=9VKZG-5xawMAX__xfZP&_nc_oc=AQni8bw6zuUmNogoPSEIKbmR5Zg_NbiqtzB5cVTLISpzSj4uxIKrJRe8a1mR9kcaL-hNKH1I2I40GewK18A5c10v&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-li3NQqKNN4fUPTalWkBn84oXcIzsSGcsbNkewDSrmkg&oe=630E612E'
    } else if (userId == 8) {
        img.src = 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.18169-9/13524433_1113187118724334_2492482761458971667_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=m60n3BDOnckAX_yDC53&_nc_ht=scontent-hkt1-2.xx&oh=00_AT-sl38bcBpPj6POH6jwLcmNYMAFNi7d4J8yHDxZczpfrg&oe=630CB4E8'
    } else if (userId == 9) {
        img.src = 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/13445287_1113186688724377_4274868041214918937_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=a9IinNpiW6cAX85_x9_&tn=Ar4McEkDbql33bI9&_nc_ht=scontent.fhan3-2.fna&oh=00_AT9lU-pxeyoAjx0i9l-Eou9jEqVuP_PDrDktZ1Y2CLV1wQ&oe=630D6AF0';
    } else if (userId == 10) {
        img.src = 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/13510849_1113187068724339_3400413038712940468_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Tz6b5VTxfr0AX93E0rQ&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-qr6fY7KB-O_KgSpO-FjjICpjQ3_qIYFVbQK6kDVY3cQ&oe=630B9585'
    }
    imgWrapper.appendChild(img);
    albumWrapper.appendChild(imgWrapper);
    albumWrapper.appendChild(titleEle);
    return albumWrapper;
};

const renderAlbum = async () => {
    try {
        const {data} = await getAlbums();

        const albums = data.map(createAlbumCard);

        document.querySelector('.album-list').append(...albums);
    } catch (err) {
        console.log(err);
    }
}

renderAlbum();