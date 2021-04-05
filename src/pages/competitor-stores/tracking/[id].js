import securePage from "hoc/secure-page";
import StoreTracking from "main/apps/store-tracking";

export default securePage({
  roles: ["user", "admin"],
  title: "Store | Tracking",
})(StoreTracking);
