import { useRouter } from "next/router";
import { Row, Col, Card, Tabs } from "antd";

import TitlesTable from "main/apps/product-tracking/titles-table";
import RatingsChart from "main/apps/product-tracking/ratings-chart";
import Prices from "main/apps/product-tracking/prices";
import ProductInfo from "main/apps/product-tracking/ProductInfo";

function ShopeeProduct() {
  const { query } = useRouter();

  return (
    <div className="gx-main-content">
      <Row>
        <Col lg={6} sm={24}>
          <ProductInfo itemid={query.id} />
        </Col>
        <Col lg={18} sm={24}>
          <Card className="gx-card">
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="PRICES" key="1">
                <Prices itemid={query.id} />
              </Tabs.TabPane>
              <Tabs.TabPane tab="TITLES" key="2">
                <TitlesTable itemid={query.id} />
              </Tabs.TabPane>
              <Tabs.TabPane tab="RATINGS" key="3">
                <RatingsChart itemid={query.id} />
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ShopeeProduct;
