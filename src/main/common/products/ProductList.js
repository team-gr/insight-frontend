import { Button, Checkbox, Col, Row } from "antd";
import { useState } from "react";
import { ProductItem } from "main/common/products/ProductItem";

export default function ProductList({ products = [] }) {
  return (
    <div className="gx-main-content">
      <Row>
        {products.map((product, index) => (<Col key={index} xl={6} md={8} sm={12} xs={24}>
          <ProductItem key={index} product={product} grid={true}/>
        </Col>
        ))}
      </Row>
    </div>
  );
}
