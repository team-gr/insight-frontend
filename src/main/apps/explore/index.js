import {
  Row,
  Col,
  Button,
  Select,
  Pagination,
  Input,
  notification,
} from "antd";
import { useState, useEffect } from "react";
import Product from "main/apps/explore/Product";

import Widget from "components/Widget";

import { useSelector } from "react-redux";
import { ItemServices } from "services";

function Explore() {
  const userid = useSelector((state) => state.auth.user.id);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [mode, setMode] = useState("category");
  const [url, setUrl] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);

  useEffect(onLoadProducts, [page]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  function onLoadProducts() {
    setItemLoading(true);
    if (mode === "shop") {
      ItemServices.getItemsByShop({ shopUrl: url, page })
        .then((resp) => {
          setProducts(resp.products);
          setTotalCount(resp.shop.item_count);
        })
        .catch(console.log)
        .finally(() => setItemLoading(false));
      return;
    }

    const target = extractCatid(url);
    if (target) {
      ItemServices.getItemsByCategory({ catid: target, page })
        .then(({ items, total_count }) => {
          setProducts(items);
          setTotalCount(total_count);
        })
        .catch(console.log)
        .finally(() => setItemLoading(false));
    }
  }

  async function onSubmit() {
    try {
      setSubmitLoading(true);

      const promises = selected
        .map((id) => products.find((p) => p.id === id))
        .map((item) =>
          ItemServices.trackNewItemByUrl({ userid, itemUrl: item.product_url })
        );
      await Promise.all(promises);
      notification["success"]({
        message: "Track new products success",
        description: "operation done!",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoading(false);
      setSelected([]);
    }
  }

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
            <Button
              type="primary"
              className="gx-mb-0"
              onClick={onSubmit}
              loading={submitLoading}
            >
              Submit
            </Button>
          )}
        </div>
      </Widget>
      <Row loading={itemLoading}>
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

export default Explore;
