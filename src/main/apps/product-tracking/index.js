import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Row, Col, Tabs } from "antd";

const Prices = dynamic(() =>
  import("main/apps/product-tracking/product-prices")
);
const TitlesTable = dynamic(() =>
  import("main/apps/product-tracking/product-titles")
);
const RatingsChart = dynamic(() =>
  import("main/apps/product-tracking/product-ratings")
);
const ProductInfo = dynamic(() =>
  import("main/apps/product-tracking/product-info")
);
const ProductRelated = dynamic(() =>
  import("main/apps/product-tracking/product-related")
);

import { useItem } from "hooks";

function ShopeeProduct() {
  const { query } = useRouter();
  const [item, loading] = useItem(query.id);

  return (
    <div className="gx-main-content">
      <Row loading={loading}>
        <Col lg={6} sm={24}>
          <ProductInfo />
        </Col>
        <Col lg={18} sm={24}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="PRICES" key="1">
              <Prices item={item} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="TITLES" key="2">
              <TitlesTable itemid={query.id} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="RATINGS" key="3">
              <RatingsChart itemid={query.id} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Related" key="4">
              <ProductRelated itemid={query.id} />
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}

export default ShopeeProduct;
