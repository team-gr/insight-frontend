import securePage from "hoc/secure-page";
import ProductTracking from "main/apps/product-tracking";

export default securePage({
  roles: ["user", "admin"],
  title: "Product",
})(ProductTracking);
