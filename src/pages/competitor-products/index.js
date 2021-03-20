import securePage from "hoc/secure-page";
import CompetitorProducts from "main/apps/products";

export default securePage({ roles: [], title: "Products" })(CompetitorProducts);
