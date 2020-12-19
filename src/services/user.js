const USER_API_ENDPOINT = process.env.NEXT_PUBLIC_USER_API_ENDPOINT;

function login({ username, password } = {}) {
  return fetch(`${USER_API_ENDPOINT}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
}

export default Object.freeze({ login });
