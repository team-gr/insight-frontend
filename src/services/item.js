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
  console.log({ userid, file });
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

export default Object.freeze({
  update,
  getItemById,
  trackNewItemByUrl,
  trackNewItemsByFile,
  getUserTrackingItems,
  removeItemFromTrackList,
  getItemsByCategory,
});
