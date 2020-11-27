import { Col, Row, Tag } from "antd"
import CardBox from "components/CardBox"

const ShopeeUrl = process.env.NEXT_PUBLIC_SHOPEE_URL
const ShopeeMediaUrl = process.env.NEXT_PUBLIC_SHOPEE_MEDIA_URL

export default function Content({shops}) {
    console.log(ShopeeUrl)
    console.log(ShopeeMediaUrl)
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
    DisplayName = "",
    Place = "",
    Image = "",
    Description = "",
    RatingStar = 0,
    FollowerCount = 0,
    ItemCount = 0,
    ResponseRate = 0,
    ResponseTime = 0,
    IsShopeeVerified = false,
    IsOfficialShop = false,
    ShopName = 0,
}) {
    return (
        <CardBox styleName="gx-card-full">
            <div className="gx-slider">
                <a href={`${ShopeeUrl}/${ShopName}`} target="_blank">
                    <img alt="shop-cover" src={`${ShopeeMediaUrl}/${Image}`}></img>
                    <div>
                        <h4 className="mt-4 ml-4 p-1">{DisplayName}</h4>
                        <p className="mt-4 ml-4 p-1">{Place}</p>
                    </div>
                </a>
            </div>
        </CardBox>
    )
}