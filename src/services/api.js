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
  console.log(process.env.REACT_APP_API_BASE_URL);
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/sign-up`,
    body
  );
  return promise;
}

function login(body) {
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/sign-in`,
    body
  );
  return promise;
}

function makePost(body) {
  const config = createHeaders();
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/timeline`,
    body,
    config
  );
  return promise;
}

function getUser() {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/user`,
    config
  );
  return promise;
}

function getPosts() {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/timeline`,
    config
  );
  return promise;
}

function updatePost(id) {
    const config = createHeaders();
    const promise = axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/timeline/${id}`,
      config
    );
    return promise;
  }

function deletePost(id) {
  const config = createHeaders();
  const promise = axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/timeline/${id}`,
    config
  );
  return promise;
}

function logout() {
    const config = createHeaders()
    const promise = axios.delete(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, config);
    return promise;
}

function getByUserName(body) {
    console.log(body)
    const config = createHeaders();
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/filter/${body}` ,config )
    return promise;
}

export {
    signUp,
    login,
    makePost,
    getUser,
    getPosts,
    deletePost,
    logout,
    getByUserName
}