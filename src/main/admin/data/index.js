import { Row, Col } from "antd";
import IconWithTextCard from "components/IconWithTextCard";

import NumberOfProduct from "main/admin/data/NumberOfProduct";
import NumberOfProxy from "main/admin/data/NumberOfProxy";
import NumberOfShop from "main/admin/data/NumberOfShop";
import NumberOfUser from "main/admin/data/NumberOfUser";

function DataPage() {
  return (
    <Row>
      <Col xl={6} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <NumberOfShop />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <NumberOfProduct />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <NumberOfUser />
      </Col>
      <Col xl={6} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
        <NumberOfProxy />
      </Col>
    </Row>
  );
}

export default DataPage;
