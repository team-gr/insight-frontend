import { Col, Divider, Input, Row, Tag } from "antd";
import { useReducer, useState, React } from "react";
import ShopApi from "services/shop";
import Spinner from "components/CircularProgress";
import ListShops from "../components/ShopList";
import { formatDecimal } from "helpers";

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
            {loading ? (<Spinner />) : (
                <div>
                    <Row>
                        <Col md={12} sm={24}>
                            <div className="flex justify-start pl-3">
                                <img className="object-contain h-28 rounded-full sm:flex-shrink-0 my-auto" src={sourceShop.avatar}></img>
                                <div className="pl-5">
                                    <div className="text-gray-700 text-xl font-semibold">{sourceShop.name}</div>
                                    <div className="pt-1 grid grid-cols-9 text-lg">
                                        <div className="col-span-4">{sourceShop.item_count}</div><div className="col-span-5">products</div>
                                        <div className="col-span-4">{sourceShop.follower_count}</div><div className="col-span-5">followers</div>
                                        <div className="col-span-4">{formatDecimal(sourceShop.rating_star)}</div><div className="col-span-5">rating</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} xs={24}>
                            <div className="text-lg text-gray-700 font-medium">Categories</div>
                            <div>
                                {
                                    sourceShop.shop_categories.map((index, item) => {
                                        (<Tag>{item.catname}</Tag>)
                                    })
                                }
                            </div>
                        </Col>
                    </Row>

                    <div className="text-gray-800 font-semibold pl-5 pt-8 text-2xl">Similar shops</div>
                    <ListShops shops={shops} />
                </div>
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
