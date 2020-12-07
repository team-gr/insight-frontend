import { Row, Col, Button, Divider, Card, Tabs } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

import AppLink from "components/AppLink";

function ShopeeProduct() {
  return (
    <div className="gx-main-content">
      <Row>
        <Col lg={8} sm={24}>
          <AppLink href="/competitor-intelligence/shopee-products">
            <div className="flex items-center cursor-pointer">
              <CaretLeftOutlined />
              <span className="ml-1">Go Back</span>
            </div>
          </AppLink>

          <h4 className="mt-6">
            Áo Khoác Xịn Cao Câp-Áo Khoác Dù Chống Năng Tia UV-Chống Mưa ATT1
          </h4>

          <img
            className="max-h-48 m-auto mt-2"
            alt=""
            src="https://cf.shopee.vn/file/04bdd19ca37b201dda21e1aadfdc4fa3"
          />

          <div className="mt-6 flex">
            <div className="w-1/2">
              <div className="mb-4">
                <span className="text-xs">PRICE</span> <br />
                <span className="text-lg font-medium">₫129.000</span>
              </div>
              <div className="mb-4">
                <span className="text-xs">SOLD</span> <br />
                <span className="text-lg font-medium">1352</span>
              </div>
              <div className="mb-0">
                <span className="text-xs">REVENUE</span> <br />
                <span className="text-lg font-medium">₫174.408.000</span>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-xs">RATE</span> <br />
                <span className="text-lg font-medium">
                  3.5 <i className="icon icon-star" />
                </span>
              </div>
            </div>
          </div>
          <Divider className="mt-0" />
          <Button type="dashed" size="large" className="w-full">
            <a href="http://www.google.com" target="_blank">
              Visit in Shopee
            </a>
          </Button>
        </Col>
        <Col lg={16} sm={24}>
          <Card className="gx-card">
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="PRICES" key="1">
                Content of Tab Pane 1
              </Tabs.TabPane>
              <Tabs.TabPane tab="IMAGES" key="2">
                Content of Tab Pane 2
              </Tabs.TabPane>
              <Tabs.TabPane tab="REVIEWS" key="3">
                Content of Tab Pane 3
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ShopeeProduct;
