import user from "./user";

const DATA_API = process.env.NEXT_PUBLIC_DATA_API
const EXPORT_API = process.env.NEXT_PUBLIC_EXPORT_API

function FollowProducts(userId, productIds = []) {
    let ids = productIds.join(',');
    return fetch(`${DATA_API}/follow-products?user_id=${userId}&product_ids=${ids}`, {
        method: "POST"
    }).then(res => res.json());
}

function GetFollowedProducts(userId) {
    return fetch(`${DATA_API}/follow-products?user_id=${userId}`, {
        method: "GET"
    }).then(res => res.json());
}

function ExportProducts(userId, products) {
    let productIds = products.join(',');
    return fetch(`${EXPORT_API}/export-products?user_id=${user}&product_ids=${ids}`, {
        method: "GET"
    }).then(res => res.json());
}

const ProductApi = Object.freeze({FollowProducts, GetFollowedProducts, ExportProducts})

export default ProductApi