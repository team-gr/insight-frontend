import CardBox from "components/CardBox"

const ShopeeUrl = process.env.NEXT_PUBLIC_SHOPEE_URL

export default function ShopCard({ shop }) {
    console.log(shop)
    return (
        <CardBox styleName="gx-card-full">
            <div className="gx-slider h-full mx-2">
                <ShopInfo {...shop} />
            </div>
        </CardBox>
    )
}

function ShopInfo({
    shop_id,
    shop_username,
    place,
    is_shopee_verified,
    is_official_shop,
    cover,
    rating_normal,
    rating_bad,
    rating_good,
    name,
    item_count,
    rating_star,
    follower_count,
    avatar,
    description
}) {
    cover = cover || "/images/shopee/shopee_logo.png";
    avatar = avatar || "/imags/shopee/avatar.jpg";

    return (
        <a href={`${ShopeeUrl}/${shop_username}`} target="_blank">
            <img alt="shop-cover" src={cover} class="object-contain w-full h-48"></img>
            <div className="text-gray-50">
                <h4 className="my-4">{name}</h4>
                <p>{place}</p>
                <div className="flex justify-between">
                    <span className="my-1">{follower_count} followers</span>
                    <div className="my-auto">{rating_star} &#9733;</div>
                </div>
            </div>
        </a>
    )
}