import securePage from "hoc/secure-page";
import MyAccount from "main/my-account";

export default securePage({ roles: [] })(MyAccount);
