import { Input } from "antd";
import { useState } from "react";
import Content from "./Content";
import {ShopList} from "./data"

const { Search } = Input;

export default function SimilarShopsHome() {
    const [shops, setShops] = useState(ShopList)

    function getShops(){
        setShops(ShopList)
    }
    
    return (
        <div>
            <Search placeholder="Shop URL" enterButton="Search" size="large" onSearch={() => getShops()} />
            <Content shops={shops}>

            </Content>
        </div>
    )
}
