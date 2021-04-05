import { useRouter } from "next/router";
import { Button, Divider, Tag } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

import AppLink from "components/AppLink";

function ShopStatistics() {
  const { query } = useRouter();

  return (
    <>
      <AppLink href="/competitor-stores">
        <div className="flex items-center cursor-pointer">
          <CaretLeftOutlined />
          <span className="ml-1">Go Back</span>
        </div>
      </AppLink>

      <h4 className="mt-6 text-xl">Coolmate</h4>

      <img
        className="max-h-48 rounded-lg mt-2"
        alt=""
        src="https://cf.shopee.vn/file/22a19ce0cc7f2ef9e2aea85eb2e86cc1_tn"
      />
      <Divider className="mt-0" />

      <Button type="dashed" size="large" className="w-full">
        <a
          href="https://shopee.vn/Ao-len-nam-co-lo-mau-moi-nhat-2020-i.38003654.1589295236?utm_campaign=-&utm_medium=affiliates&utm_source=an_17104620000&utm_content=Vs3Kgbdbosk5MgUjpWl0R4oODE4WOxLMGDPcj3tFid7IEyo0-119271-322--"
          target="_blank"
        >
          Visit in Shopee
        </a>
      </Button>

      <div className="mt-6 mx-1">
        <div className="flex justify-between items-center text-lg">
          <span>Active Vouchers:</span>
          <span>7</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span>Followers:</span>
          <span>3.374</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span>Seller Rating:</span>
          <span>95%</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span>Products Quantity:</span>
          <span>326</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span>Chat Response Rate:</span>
          <span>100%</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span>Shipped On Time Rate:</span>
          <span>100%</span>
        </div>
      </div>
    </>
  );
}

export default ShopStatistics;
