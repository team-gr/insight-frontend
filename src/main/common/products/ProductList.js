import { Button, Checkbox, Col, Row } from "antd";
import { useState } from "react";
import { ProductCard } from "main/common/products/ProductCard";

export default function ProductList({products = [], onSelect}) {
  const [checkedList, setCheckedList] = useState([]);

  function onToggleCheck(productId) {
    if (checkedList.includes(productId)) {
      setCheckedList(checkedList.filter((pid) => pid !== productId));
      return;
    }

    setCheckedList([...checkedList, productId]);
  }

  function onToggleCheckAll() {
    if (checkedList.length === products.length) {
      setCheckedList([]);
      return;
    }
    setCheckedList(products.map((p) => p.id));
  }

  return (
    <div className="p-4">
      {/* <div className="flex justify-between">
        <Checkbox onChange={onToggleCheckAll} className="my-auto" checked={products.length > 0 && checkedList.length === products.length}>Select all</Checkbox>
        <Button onClick={() => onSubmit(checkedList)} className="my-auto">{buttonText}</Button>
      </div> */}
      <Row>
        {products.map((product, index) => (
          <Col lg={4} sm={8} xs={24}>
            <ProductCard key={product.id} product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}
