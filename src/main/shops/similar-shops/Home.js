import { Input } from "antd";
import { useReducer, useState, React } from "react";
import ShopApi from "services/shop";
import Spinner from "components/CircularProgress";
import ListShops from "../components/ShopList";

const { Search } = Input;


export default function SimilarShopsHome() {
    const [shops, setShops] = useState([])
    const [loading, setLoading] = useState(false);
    const [sourceShop, setSourceShop] = useState({});

    return (
        <div>
            <Search
                placeholder="Shop URL"
                enterButton="Search"
                size="large"
                onKeyDown={(e) => e.key === "Enter" && search(e.target.value)}
                onSearch={(value) => search(value)}
            />
            {loading ? (
                <Spinner />
            ) : (
                    <ListShops shops={shops} />
                )}
        </div>
    )

    async function search(shopUrl) {
        try {
            setLoading(true);
            const res = await ShopApi.searchSimilarShops(shopUrl)
            let shops = res.matches.map((item, index) => {
                return {
                    ...item.target_shop,
                    match_num_cat_ratio: item.match_num_cat_ratio,
                    match_cat_prod_ratio: item.match_cat_prod_ratio
                }
            })
            setSourceShop(res.source_shop);
            setShops(shops);
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
}
