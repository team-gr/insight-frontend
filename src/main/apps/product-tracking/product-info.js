import { useRouter } from "next/router";
import { Button, Divider, Tag } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

import AppLink from "components/AppLink";

import { vndFormatter } from "helpers";
import { useItem } from "hooks";

function ProductInfo() {
  const { query } = useRouter();
  const [item, loading] = useItem(query.id);

  if (loading) {
    return null;
  }

  return (
    <>
      <AppLink href="/competitor-products">
        <div className="flex items-center cursor-pointer">
          <CaretLeftOutlined />
          <span className="ml-1">Go Back</span>
        </div>
      </AppLink>

      <h4 className="mt-6">{item.name}</h4>

      <img
        className="max-h-48 rounded-lg m-auto mt-2"
        alt=""
        src={`https://cf.shopee.vn/file/${item.image}`}
      />

      <div className="mt-6">
        <div className="mb-4 text-gray-500">
          <span className="text-2xl font-medium">
            {vndFormatter(item.price_before_discount / 100000)}
          </span>{" "}
          <br />
          <span className="text-xs">RETAIL PRICE</span>
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-medium mr-2">
              {vndFormatter(item.price / 100000)}
            </span>
            <Tag color="green" style={{ marginBottom: 0 }}>
              -{item.discount}%
            </Tag>
          </div>
          <span className="text-xs">SALES PRICE</span>
        </div>
      </div>
      <Divider className="mt-0" />
      <Button type="dashed" size="large" className="w-full">
        <a
          href={`https://shopee.vn/product-i.${item.shopid}.${item.id}`}
          target="_blank"
        >
          Visit in Shopee
        </a>
      </Button>
    </>
  );
}

export default ProductInfo;
