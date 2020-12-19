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

export default Object.freeze({ login, register });
