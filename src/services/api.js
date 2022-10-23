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

function getTrendingHashtags(){
    const config = createHeaders()
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/trending`, config);
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

function updatePost({ id, body }) {
  const config = createHeaders();
  const promise = axios.put(
    `${process.env.REACT_APP_API_BASE_URL}/timeline/${id}`,
    body,
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
    const config = createHeaders();
    const promise = axios.delete(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, config);
    return promise;
}

function getByUserName(id) {
    const config = createHeaders();
  const promise = axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/post/like/${id}`,
    config
  );
  return promise;
}

function getPostLike(id) {
    const config = createHeaders();
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/post/like/${id}`, config);
    return promise;
}

function postPostLike(id) {
    const config = createHeaders();
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/post/like/${id}`, {}, config);
    return promise;
}

function deletePostLike(id) {
    const config = createHeaders();
    const promise = axios.delete(`${process.env.REACT_APP_API_BASE_URL}/post/like/${id}`, config);
    return promise;
}

export {
    signUp,
    login,
    makePost,
    getUser,
    getPosts,
    updatePost,
    deletePost,
    logout,
    getByUserName,
    getTrendingHashtags,
    getPostLike,
    postPostLike,
    deletePostLike
}