import { useRouter } from "next/router";
import { Row, Col } from "antd";

import Profile from "main/apps/store-analytics/Profile";

function StoreAnalytics() {
  const { query } = useRouter();

  return (
    <Row>
      <Col xl={6} lg={12} md={12} sm={12} xs={24}>
        <Profile shopid={query.id} />
      </Col>
    </Row>
  );
}

export default StoreAnalytics;
