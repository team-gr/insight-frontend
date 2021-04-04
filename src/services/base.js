export async function call({ url, method, body, form } = {}) {
  if (url === "") {
    throw "Url empty!";
  }

  if (!validMethod(method)) {
    throw "method invalid!";
  }

  if (typeof window !== "undefined") {
    const response = await fetch(url, makeOptions({ method, body, form }));
    const json = await response.json();

    if (json.error) {
      throw json.error;
    }

    return json.data;
  }
}

function validMethod(method) {
  return (
    method === "GET" ||
    method === "POST" ||
    method === "PUT" ||
    method === "DELETE"
  );
}

function makeOptions({ method, body, form }) {
  const token = localStorage.getItem("token");

  if (method === "GET") {
    return {
      headers: { Authorization: `token ${token}` },
    };
  }

  if (form) {
    const formData = new FormData();
    for (const name in form) {
      formData.append(name, form[name]);
    }
    return {
      method,
      headers: { Authorization: `token ${token}` },
      body: formData,
    };
  }

  if (body) {
    return {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify(body),
    };
  }

  return {};
}
