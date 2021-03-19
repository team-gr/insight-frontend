import securePage from "hoc/secure-page";
import ShopeeProduct from "main/apps/shopee-product";

export default securePage({ roles: [], title: "Product" })(ShopeeProduct);
