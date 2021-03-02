// import CardBox from "components/CardBox"

// export function ProductCard({ product }) {
//     return (
//         <div>
//             <CardBox styleName="gx-card-full">
//                 <div className="gx-slider h-full">
//                     <ProductInfo {...product} />
//                 </div>
//             </CardBox>
//         </div>
//     );
// }

// function ProductInfo({ id, shop_id, image, sold, stock, price, name, product_url }) {
//     return (
//         <div className="h-100">
//             <a href={product_url} target="_blank">
//                 <img alt="product-image" src={image} className="object-contain w-full h-48"></img>
//                 <div>
//                     <h4 className="my-4 text-sm">{name}</h4>
//                     <p>{price}</p>
//                     <div className="flex justify-between">
//                         <span className="my-1">{sold} sold</span>
//                         <div className="my-auto">{stock} in stock</div>
//                     </div>
//                 </div>
//             </a>
//         </div>
//     )
// }

import React, { useState } from "react";
import { Button } from "antd";
// import StarRatingComponent from "react-star-rating-component";
import IntlMessage from "components/IntlMessage";

export function ProductItem({ product, grid }) {
  const { id, image, name, price, mrp, offer, variant, rating, description } = product;
  const [added, setAdded] = useState(false)

  async function addToList() {
    
  }

  async function removeFromList() {

  }

  return (
    <div className={`gx-product-item  ${grid ? 'gx-product-vertical' : 'gx-product-horizontal'}`}>
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <span className="gx-link gx-grid-thumb-cover">
            <img alt="Product image" src={image} />
          </span>
        </div>
      </div>

      <div className="gx-product-body">
        <h3 className="gx-product-title">{name}
          <small className="gx-text-grey">{", " + variant}</small>
        </h3>
        <div className="ant-row-flex">
          <h4>{price} </h4>
          <h5 className="gx-text-muted gx-px-2">
            <del>{mrp}</del>
          </h5>
          <h5 className="gx-text-success">{offer} off</h5>
        </div>
        <div className="ant-row-flex gx-mb-1">
          {/* <StarRatingComponent
            name=""
            value={rating}
            starCount={5}
            editing={false}/> */}
          <strong className="gx-d-inline-block gx-ml-2">{rating}</strong>
        </div>
        <p>{description}</p>
      </div>

      <div className="gx-product-footer">
        {added
          ?
          <Button onClick={addToList} >
            <div className="text-green-500">
              <IntlMessage id="button.added" />
              <i className="icon icon-check pl-2" />
            </div>
          </Button>
          :
          <Button onClick={removeFromList}>
            <IntlMessage id="button.addToList" />
          </Button>}
      </div>
    </div>
  )
};

