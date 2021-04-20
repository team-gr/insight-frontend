import { useRouter } from "next/router";
import { Row, Col } from "antd";

import Profile from "main/apps/store-analytics/Profile";
import Sentiment from "main/apps/store-analytics/Sentiment";
import Ratings from "main/apps/store-analytics/Ratings";
import Tags from "main/apps/store-analytics/Tags";
import Qualifiers from "main/apps/store-analytics/Qualifiers";
import Categories from "main/apps/store-analytics/Categories";

function StoreAnalytics() {
  const { query } = useRouter();

  return (
    <Row>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Profile shopid={query.id} />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Sentiment shopid={query.id} />
      </Col>
      <Col xl={12} lg={24} md={24}>
        <Ratings shopid={query.id} />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Tags shopid={query.id} />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Qualifiers shopid={query.id} />
      </Col>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        <Categories shopid={query.id} />
      </Col>
    </Row>
  );
}

export default StoreAnalytics;
