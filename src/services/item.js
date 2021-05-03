import { call } from "services/base";

const CORE_API_ENDPOINT = process.env.NEXT_PUBLIC_CORE_API_ENDPOINT;

function trackNewItemByUrl({ userid, itemUrl } = {}) {
  return call({
    url: `${CORE_API_ENDPOINT}/user-subscribe-to-item`,
    method: "POST",
    body: {
      user_id: userid,
      item_url: itemUrl,
    },
  });
}

function trackNewItemsByFile({ userid, file } = {}) {
  return call({
    url: `${CORE_API_ENDPOINT}/user-subscibe-to-items-by-file`,
    method: "POST",
    form: { user_id: userid, file },
  });
}

function getUserTrackingItems(userid) {
  return call({
    url: `${CORE_API_ENDPOINT}/items/user-subscribed?user_id=${userid}`,
    method: "GET",
  });
}

function removeItemFromTrackList({ userid, itemIds = [] } = {}) {
  return call({
    url: `${CORE_API_ENDPOINT}/user-unsubcribe-items`,
    method: "POST",
    body: { user_id: userid, item_ids: itemIds },
  });
}

function update({ itemid, shopid } = {}) {
  return call({
    url: `${CORE_API_ENDPOINT}/item/update`,
    method: "POST",
    body: { item_id: itemid, shop_id: shopid },
  });
}

function getItemById(itemid = "") {
  return call({
    url: `${CORE_API_ENDPOINT}/item?itemid=${itemid}`,
    method: "GET",
  });
}

function getItemsByCategory({ catid, page = 1 }) {
  return call({
    url: `${CORE_API_ENDPOINT}/items/category?catid=${catid}&page=${page}&limit=20`,
    method: "GET",
  });
}

function getItemsByShop({ shopUrl, page } = {}) {
  return call({
    url: `http://explorer.dr.smartecommerce.tech/shop-products?shop_url=${shopUrl}&page=1&platform=s`,
    method: "GET",
  });
}

function getItemRatingTagCount(itemid = "") {
  return call({
    url: `${CORE_API_ENDPOINT}/item/rating/tag-count?item_id=${itemid}`,
    method: "GET",
  });
}

function getItemRatings(itemid = "") {
  return call({
    url: `${CORE_API_ENDPOINT}/item/rating?item_id=${itemid}`,
    method: "GET",
  });
}

function getItemSimilars(itemid = "") {
  return call({
    url: `${CORE_API_ENDPOINT}/items/similar?itemid=${itemid}`,
    method: "GET",
  });
}

function getRelatedItems(itemid = "") {
  return call({
    url: `${CORE_API_ENDPOINT}/items/related?itemid=${itemid}`,
    method: "GET",
  });
}

function getAll({ page, limit } = {}) {
  return call({
    url: `${CORE_API_ENDPOINT}/item/all?limit=${limit}&page=${page}`,
    method: "GET",
  });
}

export default Object.freeze({
  getAll,
  update,
  getItemById,
  getRelatedItems,
  trackNewItemByUrl,
  trackNewItemsByFile,
  getUserTrackingItems,
  removeItemFromTrackList,
  getItemsByCategory,
  getItemRatingTagCount,
  getItemRatings,
  getItemSimilars,
  getItemsByShop,
});
