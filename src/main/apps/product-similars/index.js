import { useRouter } from "next/router";
import { Row, Col } from "antd";

import ProductInfo from "main/apps/product-similars/product-info";

function ProductSimilars() {
  const { query } = useRouter();

  return (
    <div className="gx-main-content">
      <Row>
        <Col lg={6} sm={24}>
          <ProductInfo itemid={query.id} />
        </Col>
      </Row>
    </div>
  );
}

export default ProductSimilars;
