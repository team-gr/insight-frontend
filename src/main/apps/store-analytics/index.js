import { useRouter } from "next/router";
import { Row, Col, Tabs } from "antd";

import Profile from "main/apps/store-analytics/Profile";
import Ratings from "main/apps/store-analytics/Ratings";
import Tags from "main/apps/store-analytics/Tags";
import Sentiment from "main/apps/store-analytics/Sentiment";

import { useShop, useShopRatings } from "hooks";

function StoreAnalytics() {
  const { query } = useRouter();
  const [shop, shopLoading] = useShop(query.id);
  const [ratings, ratingLoading] = useShopRatings(query.id);

  return (
    <Row loading={shopLoading || ratingLoading}>
      <Col lg={6} xl={6} xs={24}>
        <Profile shop={shop} />
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

export default StoreAnalytics;
