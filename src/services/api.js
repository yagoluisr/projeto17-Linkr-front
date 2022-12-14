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

function getTrendingHashtags() {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/trending`,
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

function getPosts(pages) {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/timeline/${pages}`,
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
  const promise = axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/sign-in`,
    config
  );
  return promise;
}

function getByUserName(body) {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/user/filter/${body}`,
    config
  );
  return promise;
}

function getPostLike(id) {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/post/like/${id}`,
    config
  );
  return promise;
}

function postPostLike(id) {
  const config = createHeaders();
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/post/like/${id}`,
    {},
    config
  );
  return promise;
}

function deletePostLike(id) {
  const config = createHeaders();
  const promise = axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/post/like/${id}`,
    config
  );
  return promise;
}

function getUserById(id) {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/profile/${id}`,
    config
  );
  return promise;
}

function getPostsbyHashtag(hashtag, pages) {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/hashtag/${hashtag}/${pages}`,
    config
  );
  return promise;
}

function getUserPosts(body, pages) {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/user/${body}/${pages}`,
    config
  );
  return promise;
}

function postComment(id, body) {
  const config = createHeaders();
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/post/comments/${id}`,
    body,
    config
  );
  return promise;
}

function getPostComments(id) {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/post/comments/${id}`,
    config
  );
  return promise;
}

function getFollowById(profileId) {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/user/follows/${profileId}`,
    config
  );
  return promise;
}

function postSharePost(id) {
  const config = createHeaders();
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/post/share/${id}`,
    {},
    config
  );
  return promise;
}
function deleteSharedPost(id) {
  const config = createHeaders();
  const promise = axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/post/share/${id}`,
    config
  );
  return promise;
}

function insertFollow(profileId) {
  const config = createHeaders();
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/user/follow/${profileId}`,
    {},
    config
  );
  return promise;
}

function deleteFollow(profileId) {
  const config = createHeaders();
  const promise = axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/user/unfollow/${profileId}`,
    config
  );
  return promise;
}

function getSharedCountByPost(id) {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/post/share/${id}`,
    config
  );
  return promise;
}

function getUserFollows(id) {
  const config = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/user/follow/${id}`,
    config
  );
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
  postComment,
  getPostComments,
  getFollowById,
  insertFollow,
  deleteFollow,
  getUserFollows,
  getUserPosts,
  postSharePost,
  deleteSharedPost,
  getSharedCountByPost,
};
