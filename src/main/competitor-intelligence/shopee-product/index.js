import { useState } from "react";
import { Row, Col, Button, Divider, Card, Tabs, Radio } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

import AppLink from "components/AppLink";

import PricesChart from "main/competitor-intelligence/shopee-product/prices-chart";
import PricesTable from "main/competitor-intelligence/shopee-product/prices-table";

import { data } from "main/competitor-intelligence/shopee-product/data";

function ShopeeProduct() {
  return (
    <div className="gx-main-content">
      <Row>
        <Col lg={6} sm={24}>
          <AppLink href="/competitor-intelligence/shopee-products">
            <div className="flex items-center cursor-pointer">
              <CaretLeftOutlined />
              <span className="ml-1">Go Back</span>
            </div>
          </AppLink>

          <h4 className="mt-6">Áo len nam cổ lọ màu mới nhất 2020</h4>

          <img
            className="max-h-48 m-auto mt-2"
            alt=""
            src="https://cf.shopee.vn/file/8eb06a09fff6af941b613e3ec8bf2a35"
          />

          <div className="mt-6 flex">
            <div className="w-1/2">
              <div className="mb-4">
                <span className="text-xs">PRICE</span> <br />
                <span className="text-lg font-medium">₫ 100.000</span>
              </div>
              <div className="mb-4">
                <span className="text-xs">SOLD</span> <br />
                <span className="text-lg font-medium">7827</span>
              </div>
              <div className="mb-0">
                <span className="text-xs">REVENUE</span> <br />
                <span className="text-lg font-medium">₫7.827.000.000</span>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-xs">RATE</span> <br />
                <span className="text-lg font-medium">
                  4.8 <i className="icon icon-star" />
                </span>
              </div>

              <div className="mb-4">
                <span className="text-xs">LIKE</span> <br />
                <span className="text-lg font-medium">
                  2368 <i className="icon icon-like" />
                </span>
              </div>
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
              <Tabs.TabPane tab="REVIEWS" key="2">
                Content of Tab Pane 3
              </Tabs.TabPane>
              <Tabs.TabPane tab="SAME PRODUCTS" key="3">
                Content of Tab Pane 2
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
