import securePage from "hoc/secure-page";
import StoreAnalytics from "main/apps/store-analytics";

export default securePage({
  roles: ["user", "admin"],
  title: "Store | Analytics",
})(StoreAnalytics);
