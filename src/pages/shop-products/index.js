import securePage from "hoc/secure-page"
import ShopProducts from "main/shop-products/ShopProducts"

export default securePage({role:[]})(ShopProducts)