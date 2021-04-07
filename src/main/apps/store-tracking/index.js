import { Row, Col } from "antd";

import ShopInfo from "main/apps/store-tracking/ShopInfo";
import Tracking from "main/apps/store-tracking/Tracking";

function StoreTracking() {
  return (
    <div className="gx-main-content">
      <Row>
        <Col lg={6} sm={24}>
          <ShopInfo />
        </Col>
        <Col lg={18} sm={24}>
          <Tracking />
        </Col>
      </Row>
    </div>
  );
}

export default StoreTracking;
