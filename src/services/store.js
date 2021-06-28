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

function trackNewStoreByUrl({ userid, shopUrl } = {}) {
  return call({
    url: `${CORE_API_ENDPOINT}/user-subscribe-to-shop`,
    method: "POST",
    body: {
      user_id: userid,
      shop_url: shopUrl,
    },
  });
}

function removeShopFromTrackList({ userid, shopIds = [] } = {}) {
  return call({
    url: `${CORE_API_ENDPOINT}/user-unsubcribe-shops`,
    method: "POST",
    body: { user_id: userid, shop_ids: shopIds },
  });
}

export default Object.freeze({
  removeShopFromTrackList,
  trackNewStoreByUrl,
  getUserTrackingStores,
  getShopByID,
  updateStore,
  tagCount,
  getRatings,
  getAll,
});
