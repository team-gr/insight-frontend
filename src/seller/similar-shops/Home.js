import { Input } from "antd";
import { useState } from "react";
import Content from "./Content";

const { Search } = Input;

export default function SimilarShopsHome() {
    const [shops, setShops] = useState([])
    return (
        <div>
            <Search placeholder="Shop URL" enterButton="Search" size="large" onSearch={getSimilarShops} />
            <Content shops={shops}>

            </Content>
        </div>
    )
}

function getSimilarShops() {
    setShops([1,2])
}

