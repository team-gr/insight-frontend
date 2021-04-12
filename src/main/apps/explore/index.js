import { Row, Col, Button, Select, Pagination, Input } from "antd";
import { useState, useEffect } from "react";
import Product from "main/apps/explore/Product";

import Widget from "components/Widget";

import { ItemServices } from "services";

function Explore() {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [mode, setMode] = useState("category");
  const [url, setUrl] = useState("");

  useEffect(onLoadProducts, [page]);

  function onLoadProducts() {
    if (mode === "shop") {
      return;
    }

    const target = extractCatid(url);
    if (target) {
      ItemServices.getItemsByCategory({ catid: target, page })
        .then(({ items, total_count }) => {
          setProducts(items);
          setTotalCount(total_count);
        })
        .catch(console.log);
    }
  }

  function onExplore() {}

  return (
    <div>
      <Widget>
        <div className="w-full justify-between flex">
          <div className="flex-grow mr-4">
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shopee URL"
            />
          </div>

          <Select
            defaultValue={mode}
            style={{ width: 120 }}
            onChange={(v) => setMode(v)}
          >
            <Select.Option value="category">Category</Select.Option>
            <Select.Option value="shop">Shop</Select.Option>
          </Select>

          <Button className="gx-mb-0 ml-4" onClick={onLoadProducts}>
            Explore
          </Button>

          {selected.length > 0 && (
            <Button type="primary" className="gx-mb-0">
              Submit
            </Button>
          )}
        </div>
      </Widget>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xl={6} md={8} sm={12} xs={24}>
            <Product
              key={product.id}
              {...product}
              selected={selected.includes(product.id)}
              setSelected={setSelected}
            />
          </Col>
        ))}
      </Row>
      <div className="text-center">
        {totalCount > 0 && (
          <Pagination
            showSizeChanger={false}
            current={page}
            total={totalCount}
            pageSize={20}
            onChange={setPage}
          />
        )}
      </div>
    </div>
  );
}

function extractCatid(url) {
  const parts = url.split(".");
  if (parts.length < 1) {
    return "";
  }
  return parts[parts.length - 1];
}

function extractShopName(url) {
  const parts = url.split("/");
  if (parts.length < 1) {
    return "";
  }
  return parts[parts.length - 1];
}

export default Explore;
