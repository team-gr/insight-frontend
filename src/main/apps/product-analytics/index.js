import { useRouter } from "next/router";
import { Row, Col, Tabs } from "antd";

import Profile from "main/apps/product-analytics/Profile";
import Ratings from "main/apps/product-analytics/Ratings";
import Sentiment from "main/apps/product-analytics/Sentiment";
import Tags from "main/apps/product-analytics/Tags";

import { useItem, useItemRatings } from "hooks";

function ProductAnalytics() {
  const { query } = useRouter();
  const [item, itemLoading] = useItem(query.id);
  const [ratings, ratingloading] = useItemRatings(query.id);
  const loading = itemLoading || ratingloading;

  return (
    <Row loading={loading}>
      <Col lg={6} sm={24}>
        <Profile item={item} />
        <Sentiment ratings={ratings} />
      </Col>
      <Col lg={18} sm={24}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Ratings" key="1">
            <Ratings ratings={ratings} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tags" key="2">
            <Tags ratings={ratings} />
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Row>
  );
}

export default ProductAnalytics;
