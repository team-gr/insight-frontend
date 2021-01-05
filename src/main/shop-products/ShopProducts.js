import { Input } from "antd";
import ProductList from "main/shop-products/ProductList";
import Spinner from "components/CircularProgress";
import { useState } from "react";
import ShopApi from "services/shop";
import ProductApi from "services/product";
import { useSelector } from "react-redux";

const { Search } = Input;

export default function ShopProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);

  async function search(shopUrl) {
    try {
      setLoading(true);
      const products = await ShopApi.listShopProducts(shopUrl);
      console.log(products);
      setProducts(products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function submitFollowProducts(checkedList) {
    try {
      setLoading(true);
      await ProductApi.FollowProducts(user.id, checkedList);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
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
      {loading ? <Spinner /> : <ProductList products={products} onSubmit={(checkedList) => submitFollowProducts(checkedList)} buttonText="Save"/>}
    </div>
  );
}
