import securePage from "hoc/secure-page";
import ProductTracking from "main/apps/product-tracking";

export default securePage({ roles: [], title: "Product" })(ProductTracking);
