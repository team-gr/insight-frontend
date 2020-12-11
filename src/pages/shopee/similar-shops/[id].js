import ListShops from "main/shops/components/ShopList"
import ShopApi from "services/shop"

export default function SimilarShops({shops = []}) {
    console.log(shops)
    return (
        <ListShops shops={shops}/>
    )
}

export const getServerSideProps = async(ctx) => {
    const shopUsername = ctx.query.id

    try {
        const shops = await ShopApi.getSimilarShops(shopUsername)
        return {
            props: {shops}
        }
    } catch (err) {
        return {
            props: {},
        }
    }
}