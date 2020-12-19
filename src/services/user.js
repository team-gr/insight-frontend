const USER_API_ENDPOINT = process.env.NEXT_PUBLIC_USER_API_ENDPOINT;

function login({ keyword = "", shopee = true, tiki = false, lazada = false }) {
  return { token: "okok", user: { name: demo } };
}

export default Object.freeze({ login });
