import { call } from "services/base";

const CORE_API_ENDPOINT = process.env.NEXT_PUBLIC_CORE_API_ENDPOINT;

function getUserTrackingStores(userid) {
  return call({
    url: `${CORE_API_ENDPOINT}/shops/user-subscribed?user_id=${userid}`,
    method: "GET",
  });
}

function updateStore(shopid) {
  return call({
    url: `${CORE_API_ENDPOINT}/shop/update`,
    method: "POST",
    body: { shop_id: shopid },
  });
}

export default Object.freeze({
  getUserTrackingStores,
  updateStore,
});
