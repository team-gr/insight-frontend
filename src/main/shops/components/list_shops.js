import { Col, Row, Tag } from "antd"
import CardBox from "components/CardBox"

const ShopeeUrl = process.env.NEXT_PUBLIC_SHOPEE_URL
const ShopeeMediaUrl = process.env.NEXT_PUBLIC_SHOPEE_MEDIA_URL

export default function ListShops({shops}) {
    return (
        <div className="p-4">
            <Row>
                {shops.map((item, index) => (
                    <Col lg={8} sm={12} xs={24} key={index}>
                        <Shop {...item}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

function Shop({
    shopid = 0,
    name = "",
    item_count = 0,
    follower_count = 0,
    place = "",
    image = "",
    shop_username = "",
}) {
    return (
        <CardBox styleName="gx-card-full">
            <div className="gx-slider">
                <a href={`${ShopeeUrl}/${shop_username}`} target="_blank">
                    <img alt="shop-cover" src={`${ShopeeMediaUrl}/${image}`}></img>
                    <div>
                        <h4 className="mt-4 ml-4 p-1">{name}</h4>
                        <p className="mt-4 ml-4 p-1">{place}</p>
                    </div>
                </a>
            </div>
        </CardBox>
    )
}