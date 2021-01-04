import CreateUserPage from "main/create-user";
import securePage from "hoc/secure-page";

export default securePage({ roles: ["admin"] })(CreateUserPage);
