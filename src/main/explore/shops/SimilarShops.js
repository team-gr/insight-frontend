import { React, useContext } from "react";
import Spinner from "components/CircularProgress";
import ListShops from "../../common/shops/ShopList"
import { Context } from "./Shops";


export default function SimilarShops({ shops }) {
    const { loading } = useContext(Context)

    return (
        <div>
            {loading ? <Spinner /> : <ListShops shops={shops} />}
        </div>
    )
}
