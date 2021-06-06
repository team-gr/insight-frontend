import { call } from "services/base";

const CORE_API_ENDPOINT = process.env.NEXT_PUBLIC_CORE_API_ENDPOINT;

function getUserTrackingStores(userid) {
  return call({
    url: `${CORE_API_ENDPOINT}/shops/user-subscribed?user_id=${userid}`,
    method: "GET",
  });
}

function updateStore(shopid, useProxy = false) {
  return call({
    url: `${CORE_API_ENDPOINT}/shop/update`,
    method: "POST",
    body: { shop_id: shopid, use_proxy: useProxy },
  });
}

function getShopByID(shopid) {
  return call({
    url: `${CORE_API_ENDPOINT}/shop?shopid=${shopid}`,
    method: "GET",
  });
}

function tagCount(shopid) {
  return call({
    url: `${CORE_API_ENDPOINT}/shop/rating/tag-count?shopid=${shopid}`,
    method: "GET",
  });
}

function getRatings(shopid) {
  return call({
    url: `${CORE_API_ENDPOINT}/shop/rating?shopid=${shopid}`,
    method: "GET",
  });
}

function getAll({ page, limit } = {}) {
  return call({
    url: `${CORE_API_ENDPOINT}/shop/all?limit=${limit}&page=${page}`,
    method: "GET",
  });
}

export default Object.freeze({
  getUserTrackingStores,
  getShopByID,
  updateStore,
  tagCount,
  getRatings,
  getAll,
});
