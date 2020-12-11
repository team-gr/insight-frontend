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
                const res = await ShopApi.listShops()
                if (mount) {
                    console.log(res)
                    let shops = res.map((item, index) => {
                        let image = ""
                        if (item.shop_covers && item.shop_covers.length > 0) {
                            image = item.shop_covers[0].image_url
                        }
                        return {
                            shopid: item.shopid,
                            name: item.name,
                            item_count: item.item_count,
                            follower_count: item.follower_count,
                            place: item.place,
                            image: image,
                            shop_username: item.account.username,
                        }
                    })
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