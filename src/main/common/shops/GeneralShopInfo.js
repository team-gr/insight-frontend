import { Col, Row, Tag } from "antd";
import { formatDecimal } from "helpers";

export default function GeneralShopInfo({ name, avatar, item_count, follower_count, rating_star, shop_categories }) {
    return (
        <Row>
            <Col md={12} sm={24}>
                <div className="flex justify-start pl-3">
                    <img className="object-contain h-28 w-28 rounded-full border-none sm:flex-shrink-0 my-auto" src={avatar}></img>
                    <div className="pl-5">
                        <div className="text-gray-700 text-xl font-semibold">{name}</div>
                        <div className="pt-1 grid grid-cols-9 text-lg">
                            <div className="col-span-4">{item_count}</div><div className="col-span-5">products</div>
                            <div className="col-span-4">{follower_count}</div><div className="col-span-5">followers</div>
                            <div className="col-span-4">{formatDecimal(rating_star)}</div><div className="col-span-5">rating</div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col sm={12} xs={24}>
                <div className="text-lg text-gray-700 font-medium">Categories</div>
                <div>
                    {
                        shop_categories && shop_categories.map((index, item) => 
                            (<Tag key={index}>{item.catid} {item.catname}</Tag>)
                        )   
                    }
                </div>
            </Col>
        </Row>
    )
}