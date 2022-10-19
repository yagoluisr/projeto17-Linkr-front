import axios from "axios";

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("linkr"));
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`,
        },
    };

    return config;
}

function signUp(body) {
    console.log(process.env.REACT_APP_API_BASE_URL)
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, body);
    return promise;
}

function login(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, body);
    return promise;
}

export {
    signUp,
    login,
}