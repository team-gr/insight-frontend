import ProductList from "main/common/products/ProductList";
import { useContext } from "react";
import { Context } from "./Shops";

export default function ShopProducts({ products }) {
    const { submitFollowProducts } = useContext(Context)
    return (
        <ProductList products={products} onSubmit={(checkedList) => submitFollowProducts(checkedList)} buttonText="Save" />
    )
}