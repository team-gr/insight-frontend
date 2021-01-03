import { Button, Checkbox, Input } from "antd";
import Layout from "layout";
import ProductList from "main/shop-products/ProductList";
import Spinner from "components/SpinnerCustom";
import { useState } from "react";
import ShopApi from "services/shop";

const { Search } = Input;

export default function ShopProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function search(shopUrl) {
    try {
      const products = await ShopApi.listShopProducts(shopUrl);
      console.log(products);
      setProducts(products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="pb-2 px-2 text-lg font-medium text-black">
        Enter shop URL to discover their products, you can add these products to
        your store
      </div>
      <Search
        placeholder="Shop URL"
        enterButton="Enter"
        size="large"
        onKeyDown={(e) => e.key === "Enter" && search(e.target.value)}
        onSearch={(value) => search(value)}
      />
      {loading ? <Spinner /> : <ProductList products={products} />}
    </Layout>
  );
}
