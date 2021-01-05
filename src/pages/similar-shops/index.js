import Layout from "layout";
import SimilarShopsHome from "main/shops/SimilarShopsHome";
import securePage from "hoc/secure-page"

export default securePage({roles:[]})(SimilarShopsHome)
