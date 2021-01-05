import securePage from "hoc/secure-page";
import FollowedProducts from "main/shop-products/FollowedProducts";

export default securePage({role:[]})(FollowedProducts)