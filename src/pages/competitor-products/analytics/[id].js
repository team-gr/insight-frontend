import securePage from "hoc/secure-page";
import ProductAnalytics from "main/apps/product-analytics";

export default securePage({ roles: [], title: "Product" })(ProductAnalytics);
