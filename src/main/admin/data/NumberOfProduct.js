import { useState, useEffect } from "react";
import { Card } from "antd";

import { CountServices } from "services";

function NumberOfProduct() {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    CountServices.countAll()
      .then((counts) => {
        console.log(counts);
        setProductCount(counts.items);
      })
      .catch(console.log);
  }, []);

  return (
    <Card className="gx-card-widget gx-card-full gx-p-3">
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-lg-4 gx-mr-3">
          <i
            className="icon icon-product-grid gx-fs-xlxl  gx-d-flex"
            style={{ fontSize: 45, color: "#DB4437" }}
          />
        </div>
        <div className="gx-media-body">
          <h1 className="gx-fs-xxxl gx-font-weight-medium gx-mb-1">
            {productCount}
          </h1>
          <p className="gx-text-grey gx-mb-0">#Product</p>
        </div>
      </div>
    </Card>
  );
}

export default NumberOfProduct;
