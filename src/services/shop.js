const SHOP_DETAIL_URL = process.env.NEXT_PUBLIC_SHOPEE_GET_SHOP_URL

function getShopDetail(shopId) {
    return fetch(`${SHOP_DETAIL_URL}?shopid=${shopId}`, {
        method: "GET"
    }).then(res => res.json()['data']);
}

export default Object.freeze({getShopDetail})