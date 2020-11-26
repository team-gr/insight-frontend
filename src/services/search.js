const SEARCH_ENDPOINT = process.env.NEXT_PUBLIC_SEARCH_API_ENDPOINT;

function hints({ keyword = "", shopee = true, tiki = false, lazada = false }) {
  return fetch(`${SEARCH_ENDPOINT}/hints`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ keyword, shopee, tiki, lazada }),
  }).then((res) => res.json());
}

function items({ keyword = "" }) {
  return fetch(`${SEARCH_ENDPOINT}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ keyword }),
  }).then((res) => res.json());
}

export default Object.freeze({ hints, items });
