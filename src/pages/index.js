import securePage from "hoc/secure-page";
import Home from "main/home";

export default securePage({ roles: [] })(Home);
