import { Input } from "antd";
import Layout from "layout";

const { Search } = Input;
export default function SimilarShops() {
  return (
    <Layout>
      <Search placeholder="Shop URL" enterButton="Search" size="large" onSearch={getSimilarShops} />
    </Layout>
  );
}

const getSimilarShops = (value) => {
  console.log(value)
}