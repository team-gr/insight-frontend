import Layout from "layout";
import SimilarShopsHome from "main/shops/similar-shops/Home";
import securePage from "hoc/secure-page"

export default securePage({roles:[]})(SimilarShopsHome)
