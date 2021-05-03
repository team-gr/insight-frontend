import securePage from "hoc/secure-page";
import ProductSimilars from "main/apps/product-similars";

export default securePage({
  roles: ["user", "admin"],
  title: "Product | Similars",
})(ProductSimilars);
