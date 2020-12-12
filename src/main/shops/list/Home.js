import { useEffect, useState } from "react";
import ShopApi from "services/shop";
import ListShops from "../components/ShopList";

export default function ListShopHome() {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mount = true
        async function onFetch() {
            setLoading(true)
            try {
                const shops = await ShopApi.listShops()
                if (mount) {
                    setShops(shops)
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

    return (
        <ListShops shops={shops}/>
    )
}