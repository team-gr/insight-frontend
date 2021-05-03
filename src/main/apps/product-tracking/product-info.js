import { useEffect, useState } from "react";
import { Button, Divider, Tag } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

import AppLink from "components/AppLink";

import { ItemServices } from "services";

import { vndFormatter } from "helpers";

function ProductInfo({ itemid }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log(product);
  });

  useEffect(() => {
    ItemServices.getItemById(itemid).then(setProduct).catch(console.log);
  }, []);

  return (
    <>
      <AppLink href="/competitor-products">
        <div className="flex items-center cursor-pointer">
          <CaretLeftOutlined />
          <span className="ml-1">Go Back</span>
        </div>
      </AppLink>

      <h4 className="mt-6">{product.name}</h4>

      <img
        className="max-h-48 rounded-lg m-auto mt-2"
        alt=""
        src={`https://cf.shopee.vn/file/${product.image}`}
      />

      <div className="mt-6">
        <div className="mb-4 text-gray-500">
          <span className="text-2xl font-medium">
            {vndFormatter(product.price_before_discount / 100000)}
          </span>{" "}
          <br />
          <span className="text-xs">RETAIL PRICE</span>
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-medium mr-2">
              {vndFormatter(product.price / 100000)}
            </span>
            <Tag color="green" style={{ marginBottom: 0 }}>
              -{product.discount}%
            </Tag>
          </div>
          <span className="text-xs">SALES PRICE</span>
        </div>
      </div>
      <Divider className="mt-0" />
      <Button type="dashed" size="large" className="w-full">
        <a
          href={`https://shopee.vn/product-i.${product.shopid}.${product.id}`}
          target="_blank"
        >
          Visit in Shopee
        </a>
      </Button>
    </>
  );
}

export default ProductInfo;
