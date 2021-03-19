import securePage from "hoc/secure-page";
import ShopeeProducts from "main/apps/shopee-products";

export default securePage({ roles: [], title: "Products" })(ShopeeProducts);
