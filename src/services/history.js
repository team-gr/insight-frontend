import { call } from "services/base";

const CORE_API_ENDPOINT = process.env.NEXT_PUBLIC_CORE_API_ENDPOINT;

function getItemPriceHistory(itemid) {
  return call({
    url: `${CORE_API_ENDPOINT}/history/item-price?itemid=${itemid}`,
    method: "GET",
  });
}

function getItemNameHistory(itemid) {
  return call({
    url: `${CORE_API_ENDPOINT}/history/item-name?itemid=${itemid}`,
    method: "GET",
  });
}

function getItemRatingsHistory(itemid) {
  return call({
    url: `${CORE_API_ENDPOINT}/history/item-ratings?itemid=${itemid}`,
    method: "GET",
  });
}

export default Object.freeze({
  getItemPriceHistory,
  getItemNameHistory,
  getItemRatingsHistory,
});
