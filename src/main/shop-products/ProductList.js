import { Button, Checkbox, Col, Row } from "antd";
import { useState } from "react";
import { ProductCard } from "./ProductCard";

export default function ProductList({ products = [] } = {}) {
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
      <div className="flex justify-between">
        <Checkbox onChange={onToggleCheckAll}>Select all</Checkbox>
        <Button>Save</Button>
      </div>
      <Row>
        {products.map((item, index) => (
          <Col lg={6} sm={12} xs={24} key={index}>
            <ProductCard
              product={item}
              heading={
                <div className="pb-1">
                  <Checkbox
                    checked={checkedList.includes(item.id)}
                    onChange={() => onToggleCheck(item.id)}
                  />
                </div>
              }
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
