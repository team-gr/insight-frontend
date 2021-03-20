import { useState } from "react";
import { Row, Col, Button, Divider, Card, Tabs, Radio, Tag } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

import AppLink from "components/AppLink";

import PricesChart from "main/apps/product-tracking/prices-chart";
import PricesTable from "main/apps/product-tracking/prices-table";
import TitlesTable from "main/apps/product-tracking/titles-table";
import ImagesTable from "main/apps/product-tracking/images-table";
import RatingsChart from "main/apps/product-tracking/ratings-chart";
import ProductNotificationSettings from "main/apps/product-tracking/settings";

import { data } from "main/apps/product-tracking/data";

function ShopeeProduct() {
  return (
    <div className="gx-main-content">
      <Row>
        <Col lg={6} sm={24}>
          <AppLink href="/competitor-products">
            <div className="flex items-center cursor-pointer">
              <CaretLeftOutlined />
              <span className="ml-1">Go Back</span>
            </div>
          </AppLink>

          <h4 className="mt-6">Áo len nam cổ lọ màu mới nhất 2020</h4>

          <img
            className="max-h-48 rounded-lg m-auto mt-2"
            alt=""
            src="https://cf.shopee.vn/file/8eb06a09fff6af941b613e3ec8bf2a35"
          />

          <div className="mt-6">
            <div className="mb-4 text-gray-500">
              <span className="text-2xl font-medium">₫ 100.000</span> <br />
              <span className="text-xs">RETAIL PRICE</span>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-medium mr-2">₫ 80.000</span>
                <Tag color="green" style={{ marginBottom: 0 }}>
                  -20%
                </Tag>
              </div>
              <span className="text-xs">SALES PRICE</span>
            </div>
          </div>
          <Divider className="mt-0" />
          <Button type="dashed" size="large" className="w-full">
            <a
              href="https://shopee.vn/Ao-len-nam-co-lo-mau-moi-nhat-2020-i.38003654.1589295236?utm_campaign=-&utm_medium=affiliates&utm_source=an_17104620000&utm_content=Vs3Kgbdbosk5MgUjpWl0R4oODE4WOxLMGDPcj3tFid7IEyo0-119271-322--"
              target="_blank"
            >
              Visit in Shopee
            </a>
          </Button>
        </Col>
        <Col lg={18} sm={24}>
          <Card className="gx-card">
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="PRICES" key="1">
                <Prices />
              </Tabs.TabPane>
              <Tabs.TabPane tab="TITLES" key="2">
                <TitlesTable />
              </Tabs.TabPane>
              <Tabs.TabPane tab="RATINGS" key="3">
                <RatingsChart />
              </Tabs.TabPane>
              <Tabs.TabPane tab="IMAGES" key="4">
                <ImagesTable />
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function Prices() {
  const [viewStyle, setViewStyle] = useState("table");

  function onViewStyleChange(e) {
    setViewStyle(e.target.value);
  }

  return (
    <div>
      <Radio.Group onChange={onViewStyleChange} defaultValue={viewStyle}>
        <Radio.Button value="chart">Chart view</Radio.Button>
        <Radio.Button value="table">Table view</Radio.Button>
      </Radio.Group>

      {viewStyle === "chart" && <PricesChart data={data} />}
      {viewStyle === "table" && <PricesTable data={data} />}
    </div>
  );
}

export default ShopeeProduct;
