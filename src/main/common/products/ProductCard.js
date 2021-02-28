import CardBox from "components/CardBox"

export function ProductCard({ product }) {
    return (
        <div>
            <CardBox styleName="gx-card-full">
                <div className="gx-slider h-full">
                    <ProductInfo {...product} />
                </div>
            </CardBox>
        </div>
    );
}

function ProductInfo({ id, shop_id, image, sold, stock, price, name, product_url }) {
    return (
        <div className="h-100">
            <a href={product_url} target="_blank">
                <img alt="product-image" src={image} className="object-contain w-full h-48"></img>
                <div>
                    <h4 className="my-4 text-sm">{name}</h4>
                    <p>{price}</p>
                    <div className="flex justify-between">
                        <span className="my-1">{sold} sold</span>
                        <div className="my-auto">{stock} in stock</div>
                    </div>
                </div>
            </a>
        </div>
    )
}