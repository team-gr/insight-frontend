import { Input } from "antd";
import { useReducer, useState, React } from "react";
import ShopApi from "services/shop";
import Spinner from "components/SpinnerCustom";
import ListShops from "../components/ShopList";

const { Search } = Input;

// export const Context = React.createContext();

// export const actions = {
//     SET_LOADING: "set_loading",
//     SET_SHOPS: "set_shops",
// }

// const initialState = { loading: false, shops: [] }

// function reducer(state, action) {
//     switch (action.type) {
//         case actions.SET_LOADING:
//             return { ...state, loading: action.payload }
//         case actions.SET_SHOPS:
//             return { ...state, shops: action.payload }
//         default:
//             return state
//     }
// }


export default function SimilarShopsHome() {
    // const [state, dispatch] = useReducer(reducer, initialState)
    // const [open, setOpen] = useState(false)

    const [shops, setShops] = useState([])
    const [loading, setLoading] = useState(false);

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
            const similarShops = await ShopApi.searchSimilarShops(shopUrl)
            let shops = similarShops.map((item, index) => {
                return {
                    ...item.target_shop,
                    match_num_cat_ratio: item.match_num_cat_ratio,
                    match_cat_prod_ratio: item.match_cat_prod_ratio
                }
            })
            setShops(shops)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
}
