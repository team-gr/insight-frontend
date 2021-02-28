import ProductList from "main/common/products/ProductList";
import ProductApi from "services/product";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function ShopProducts({ products }) {
    const user = useSelector(state => state.auth.user)
    const [selectedProducts, setSelectedProducts] = useState([])

    async function submitFollowProducts(checkedList) {
        try {
            setTabLoading(true);
            await ProductApi.FollowProducts(user.id, checkedList);
        } catch (err) {
            console.log(err);
        } finally {
            setTabLoading(false);
        }
    }

    return (
        <ProductList products={products} onSubmit={(checkedList) => submitFollowProducts(checkedList)} />
    )
}