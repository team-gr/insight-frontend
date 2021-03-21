import { Row, Col } from "antd";

import OverallSentimentAnalysis from "main/apps/product-analytics/OverallSentimentAnalysis";
import OverallRatingsStar from "main/apps/product-analytics/OverallRatings";

import TagList from "main/apps/product-analytics/TagList";
import RatingList from "main/apps/product-analytics/RatingList";

function ProductAnalytics() {
  return (
    <Row>
      <Col xl={6} lg={8} md={8} sm={10} xs={24}>
        <div className="gx-profileon-thumb gx-profileon-thumb-htctrcrop rounded-lg mb-3">
          <img
            src="https://cf.shopee.vn/file/2345924aef4b8c27cf5c2b13fcc5bb47"
            alt=""
          />
        </div>
        <div className="gx-follower gx-text-center">
          <ul className="gx-follower-list">
            <li>
              <span className="gx-follower-title">₫ 100.000</span>
              <span>retail price</span>
            </li>
            <li>
              <span className="gx-follower-title">₫ 80.000</span>
              <span>sales price</span>
            </li>
          </ul>
        </div>
        <TagList />
      </Col>
      <Col xl={12} lg={8} md={16} sm={14} xs={24}>
        <RatingList />
      </Col>
      <Col xl={6} lg={8} md={6} sm={24} xs={24}>
        <OverallSentimentAnalysis />
        <OverallRatingsStar />
      </Col>
    </Row>
  );
}

export default ProductAnalytics;
