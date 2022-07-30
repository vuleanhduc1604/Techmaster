// AJAX

// Kỹ thuật cho phép client và server giao tiếp/trao đổi dữ liệu mà không cần phải reload trang qua HTTP

// HTTP = HyperText Transfer Protocol

// Client gửi đi HTTP request
// Startline: Path (endpoint) -> Method (hành động - GET (đọc dữ liệu) - POST (tạo mới dữ liệu) - PUT (chỉnh sửa) - DELETE (xóa))
// Header: Metadata
// Body: Data

// Server trả về HTTP Response
// Status (Thành công hay thất bại) (1xx  - 2xx (Thành công) - 3xx (Chuyển hướng) - 4xx (lỗi phía client) - 5xx (lỗi phía server))
// Header: Data
// Body: Data

const getUsers = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
}

const createUserCard = ({name, email, phone}) => {
    const card = document.createElement("div");
    card.classList.add("user");
    const nameEle = document.createElement('div');
    nameEle.classList.add('user-name');
    nameEle.textContent = name;
    const emailEle = document.createElement('div');
    emailEle.classList.add('user-email');
    emailEle.textContent = email;
    const phoneEle = document.createElement('div');
    phoneEle.classList.add('user-phone');
    phoneEle.textContent = phone;

    card.appendChild(nameEle, emailEle, phoneEle);

    return card;
}

const renderUser = async () => {
    try {
        const {data} = await getUsers();

        // Biến đổi mảng object -> HTML
        const users = data.map(createUserCard);
        document.querySelector('.user-list').append(...users);
    } catch (error) {
        console.log(error);
    }
}

renderUser();