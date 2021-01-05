import UsersPage from "main/users";
import securePage from "hoc/secure-page";

export default securePage({ roles: ["admin"] })(UsersPage);
