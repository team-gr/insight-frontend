import { useRouter } from "next/router";
import { Row, Col } from "antd";

import Profile from "main/apps/product-analytics/Profile";
import Tags from "main/apps/product-analytics/Tags";
import Ratings from "main/apps/product-analytics/Ratings";
import Sentiment from "main/apps/product-analytics/Sentiment";
import Qualifiers from "main/apps/product-analytics/Qualifiers";
import Categories from "main/apps/product-analytics/Categories";

function ProductAnalytics() {
  const { query } = useRouter();
  return (
    <Row>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Profile itemid={query.id} />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Sentiment itemid={query.id} />
      </Col>
      <Col xl={12} lg={24} md={24}>
        <Ratings itemid={query.id} />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Tags itemid={query.id} />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Qualifiers itemid={query.id} />
      </Col>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        <Categories itemid={query.id} />
      </Col>
    </Row>
  );
}

export default ProductAnalytics;
