import { Card } from "antd"
import CardBox from "components/CardBox"

const ShopeeUrl = process.env.NEXT_PUBLIC_SHOPEE_URL
const ShopeeMediaUrl = process.env.NEXT_PUBLIC_SHOPEE_MEDIA_URL

export default function ShopCard({ shopInfo, matchInfo }) {
    return (
        <CardBox styleName="gx-card-full">
            <div className="gx-slider">
                <ShopInfo {...shopInfo} />
            </div>
        </CardBox>
    )
}

function ShopInfo({
    shop_username = "",
    cover = "",
    avatar = "",
    name = "",
    place = "",
    description = ""
}) {
    return (
        // <a href={`${ShopeeUrl}/${shopInfo.shop_username}`} target="_blank">
        //     <img alt="shop-cover" src={`${ShopeeMediaUrl}/${shopInfo.image}`}></img>
        //     <div>
        //         <h4 className="mt-4 ml-4 p-1">{shopInfo.name}</h4>
        //         <p className="mt-4 ml-4 p-1">{shopInfo.place}</p>
        //     </div>
        // </a>
        <Card cover={
            <img alt="shop-cover" src={`${ShopeeMediaUrl}/${cover}`} />
        } actions={[
            <EllipsisOutlined key="ellipsis" />
        ]}>
            <Meta
                avatar={<Avatar src={`${ShopeeMediaUrl}/${avatar}`} />}
                title={name}
                description={description}
            />
        </Card>
    )
}