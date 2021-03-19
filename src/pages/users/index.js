import UsersPage from "main/admin/users";
import securePage from "hoc/secure-page";

export default securePage({ roles: ["admin"] })(UsersPage);
