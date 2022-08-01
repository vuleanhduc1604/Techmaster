const getUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
};

const createUserCard = ({name, email, phone, website, company}) => {
    const row = document.createElement('tr');
    const nameEle = document.createElement('th');
    const emailEle = document.createElement('th');
    const phoneEle = document.createElement('th');
    const companyEle = document.createElement('th');
    const websiteEle = document.createElement('th');
    nameEle.textContent = name;
    emailEle.textContent = email;
    phoneEle.textContent = phone;
    companyEle.textContent = company.name;
    websiteEle.textContent = website;
    row.appendChild(nameEle);
    row.appendChild(emailEle);
    row.appendChild(phoneEle);
    row.appendChild(companyEle);
    row.appendChild(websiteEle);
    return row;
};

const renderUser = async () => {
    try {
        const {data} = await getUsers();
        const users = data.map(createUserCard);

        document.querySelector('table').append(...users);
    } catch (err) {
        console.log(err);
    }
}

renderUser();