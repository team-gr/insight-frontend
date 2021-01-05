import Spinner from "components/CircularProgress";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductApi from "services/product";
import ProductList from "./ProductList";

export default function FollowedProducts(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        let mount = true
        async function onFetch() {
            setLoading(true)
            try {
                const products = await ProductApi.GetFollowedProducts(user.id)
                if (mount) {
                    setProducts(products)
                }
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        onFetch()
        return () => {
            mount = false
        }
    }, [])

    async function exportExcelFile(checkedList){
        
    }

    return (
        <div>
          <div className="pb-2 px-2 text-lg font-medium text-black">
            Followed products
          </div>
          {loading ? <Spinner /> : <ProductList products={products} onSubmit={(checkedList) => exportExcelFile(checkedList)} buttonText="Export to excel file"/>}
        </div>
      );
}