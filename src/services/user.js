import { call } from "services/base";

const USER_API_ENDPOINT = process.env.NEXT_PUBLIC_USER_API_ENDPOINT;

function login({ email, password } = {}) {
  return call({
    url: `${USER_API_ENDPOINT}/login`,
    method: "POST",
    body: { email, password },
  });
}

function register({ username, role, email, password } = {}) {
  return call({
    url: `${USER_API_ENDPOINT}/register`,
    method: "POST",
    body: { username, role, email, password },
  });
}

function getProfile() {
  return call({
    url: `${USER_API_ENDPOINT}/profile`,
    method: "GET",
  });
}

function getUsers() {
  return call({
    url: `${USER_API_ENDPOINT}/users`,
    method: "GET",
  });
}

function deleteUser(uid) {
  return call({
    url: `${USER_API_ENDPOINT}/users/${uid}`,
    method: "DELETE",
  });
}

function getUserById(uid) {
  return call({
    url: `${USER_API_ENDPOINT}/users/${uid}`,
    method: "GET",
  });
}

function updateUser(update = {}) {
  return call({
    url: `${USER_API_ENDPOINT}/users/${update.id}`,
    method: "PUT",
    body: update,
  });
}

export default Object.freeze({
  login,
  register,
  getProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
});
