export const getuser = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = 'signin.html';
    }

    try {
        let headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        let reqOptions = {
            url: "https://todo-api-with-auth.herokuapp.com/api/auth/user",
            method: "GET",
            headers
        };

        return axios.request(reqOptions);
    } catch (err) {
        localStorage.removeItem("token");
        console.log(err);
        alert("Invalid token");
        window.location.href = 'signin.html';
    }
};  

export const login = async (user) => {
    try {
        let headers = {
            "Content-Type": "application/json",
        };
        let bodyContent = JSON.stringify(user);
    
        let reqOptions = {
            url: "https://todo-api-with-auth.herokuapp.com/api/auth/signin",
            method: "POST",
            headers,
            data: bodyContent,
        };
    
        return axios.request(reqOptions);
    } catch (err) {
        console.log(err);
        alert("Invalid user info");
    }
}

export const signup = async (user) => {
    try {
        let headers = {
            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify(user);
        let reqOptions = {
            url: "https://todo-api-with-auth.herokuapp.com/api/auth/signup",
            method: "POST",
            headers,
            data: bodyContent,
        };

        return axios.request(reqOptions);
    } catch (err) {
        console.log(err);
        alert("Something went wrong. Please try again")
    }
}
export const createTask = async (user) => {
    const token = localStorage.getItem('token');

    try {
        let headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
           }
        
           let bodyContent = JSON.stringify(user);
           let reqOptions = { 
             url: "https://todo-api-with-auth.herokuapp.com/api/tasks",
             method: "POST",
             data: bodyContent,
             headers
           };
           
           return axios.request(reqOptions)
    } catch (error) {
        console.log(error);
    }
};

export const changeName = async(user) => {
    const token = localStorage.getItem('token');

    try {
        let headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        };

        let bodyContent = JSON.stringify(user);
        let reqOptions = {
            url: "https://todo-api-with-auth.herokuapp.com/api/user/profile",
            method: "PUT",
            data: bodyContent,
            headers
        }

        return axios.request(reqOptions);
    } catch (err) {
        console.log(err);
    }
};  
// Not working
export const changeAvatar = async(user) => {
    const token = localStorage.getItem('token');

    try {
        let headers = {
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json"
        };

        let formData = new FormData();
        formData.append("avatar", user);

        let bodyContent = formData;
        let reqOptions = {
            url: "https://todo-api-with-auth.herokuapp.com/api/user/avatar",
            method: "PUT",
            data: bodyContent,
            headers
        };

        return axios.request(reqOptions);
    } catch (err) {
        console.log(err);
        alert('Something went wrong. Please try again.')
    }
};

export const getTask = async(user) => {
    const token = localStorage.getItem('token');
    
    try {
        let headers = {
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json" 
        }

        let bodyContent = JSON.stringify(user);
        let reqOptions = {
            url: "https://todo-api-with-auth.herokuapp.com/api/tasks",
            method: "GET",
            data: bodyContent,
            headers
        };

        return axios.request(reqOptions);
    } catch (err) {
        console.log(err);
    }
};