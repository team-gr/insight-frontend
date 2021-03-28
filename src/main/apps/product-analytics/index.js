import { Row, Col } from "antd";

import Profile from "main/apps/product-analytics/Profile";
import Tags from "main/apps/product-analytics/Tags";
import Ratings from "main/apps/product-analytics/Ratings";
import Sentiment from "main/apps/product-analytics/Sentiment";
import Qualifiers from "main/apps/product-analytics/Qualifiers";
import Categories from "main/apps/product-analytics/Categories";

function ProductAnalytics() {
  return (
    <Row>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Profile />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Sentiment />
      </Col>
      <Col xl={12} lg={24} md={24}>
        <Ratings />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Tags />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Qualifiers />
      </Col>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        <Categories />
      </Col>
    </Row>
  );
}

export default ProductAnalytics;
