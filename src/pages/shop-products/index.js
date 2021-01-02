import { Input } from "antd";
import Layout from "layout";
import ProductList from "main/shop-products/ProductList";
import ShopApi from "services/shop";
import Spinner from "components/SpinnerCustom";
import { useState } from "react";

const { Search } = Input;

export default () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <Layout>
            <div>
                <Search
                    placeholder="Shop URL"
                    enterButton="Enter"
                    size="large"
                    onKeyDown={(e) => e.key === "Enter" && search(e.target.value)}
                    onSearch={(value) => search(value)}
                />
                {loading ? (
                    <Spinner />
                ) : (
                        <ProductList products={products} />
                    )}
            </div>
        </Layout>
    );

    async function search(shopUrl) {
        try {
            const products = await ShopApi.listShopProducts(shopUrl)
            console.log(products)
            setProducts(products)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
}