import securePage from "hoc/secure-page";
import Explore from "main/apps/explore";

export default securePage({ roles: ["user", "admin"] })(Explore);
