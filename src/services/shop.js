const SHOP_DETAIL_URL = process.env.NEXT_PUBLIC_SHOPEE_GET_SHOP_URL
const DATA_API = process.env.NEXT_PUBLIC_DATA_API
const DEFAULT_LIMIT_ITEMS = 10

function getShopDetail(shopId) {
    return fetch(`${SHOP_DETAIL_URL}?shopid=${shopId}`, {
        method: "GET"
    }).then(res => res.json()['data']);
}

function searchSimilarShops(shopUrl) {
    return fetch(`${DATA_API}/similar-shops?url=${shopUrl}`, {
        method: "GET"
    }).then(res => res.json());
}

function getSimilarShops(shopUsername) {
    return fetch(`${DATA_API}/similar-shops?shop_username=${shopUsername}`, {
        method: "GET",
    }).then(res => res.json());
}

function listShops(limit=DEFAULT_LIMIT_ITEMS) {
    return fetch(`${DATA_API}/list-shops`, {
        method: "GET"
    }).then(res => res.json());
}

function listShopProducts(shopUrl) {
    return fetch(`${DATA_API}/shop-products?url=${shopUrl}`, {
        method: "GET"
    }).then(res => res.json());
}

const ShopApi = Object.freeze({getShopDetail, listShops, getSimilarShops, searchSimilarShops, listShopProducts})

export default ShopApi