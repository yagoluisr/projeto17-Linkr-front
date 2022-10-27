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

function getByUserName(body) {
    const config = createHeaders();
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/filter/${body}`,config);
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

function getUserById (body) {
  const config = createHeaders();
  const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/${body}`, config);
  return promise;
}

function getPostsbyHashtag(hashtag){
  const config = createHeaders();
  const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/hashtag/${hashtag}`, config);
  return promise;
}

function postSharePost(id){
  const config = createHeaders();
  const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/post/share/${id}`, config);
  return promise;
}
function deleteSharedPost(id){
  const config = createHeaders();
  const promise = axios.delete(`${process.env.REACT_APP_API_BASE_URL}/post/share/${id}`, config);
  return promise;
}
function getSharedCountByPost(id){
  const config = createHeaders();
  const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/post/share/${id}`, config);
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
    getUserById,
    getTrendingHashtags,
    getPostLike,
    postPostLike,
    deletePostLike,
    getPostsbyHashtag,
    postSharePost,
    deleteSharedPost,
    getSharedCountByPost
}