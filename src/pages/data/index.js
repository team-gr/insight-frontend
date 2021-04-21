import DataPage from "main/admin/data";
import securePage from "hoc/secure-page";

export default securePage({ roles: ["admin"], title: "admin | data" })(
  DataPage
);
