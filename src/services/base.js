export async function call({ url, method, body }) {
  if (url === "") {
    throw "Url empty!";
  }

  if (!validMethod(method)) {
    throw "method invalid!";
  }

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const opts =
      method === "GET"
        ? {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        : {
            method,
            headers: {
              "Content-Type": "application/json",
              Authorization: `token ${token}`,
            },
            body: JSON.stringify(body),
          };

    const response = await fetch(url, opts);
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
