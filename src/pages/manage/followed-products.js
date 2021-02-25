import securePage from "hoc/secure-page";
import FollowedProducts from "main/manage/followed-products/FollowedProducts";

export default securePage({role:[]})(FollowedProducts)