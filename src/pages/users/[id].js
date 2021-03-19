import CreateUpdateUserPage from "main/admin/create-update-user";
import securePage from "hoc/secure-page";

export default securePage({ roles: ["admin"] })(CreateUpdateUserPage);
