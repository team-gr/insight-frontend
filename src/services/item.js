import { call } from "services/base";

const ITEM_API_ENDPOINT = process.env.NEXT_PUBLIC_ITEM_API_ENDPOINT;

function hints({ keyword, shopee, tiki, lazada } = {}) {
  return call({
    url: `${ITEM_API_ENDPOINT}/hints`,
    method: "POST",
    body: { keyword, shopee, tiki, lazada },
  });
}

function items({ keyword } = {}) {
  return call({
    url: `${ITEM_API_ENDPOINT}/items`,
    method: "POST",
    body: { keyword },
  });
}

function item({ itemid, shopid } = {}) {
  return call({
    url: `${ITEM_API_ENDPOINT}/item?itemid=${itemid}&shopid=${shopid}`,
    method: "GET",
  });
}

export default Object.freeze({ hints, items, item });
