import securePage from "hoc/secure-page";
import StoreTracking from "main/apps/stores";

export default securePage({
  roles: ["user", "admin"],
  title: "Store | Tracking",
})(StoreTracking);
