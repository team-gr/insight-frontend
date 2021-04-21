import { Row, Col, Card, Tabs } from "antd";

import NumberOfProduct from "main/admin/data/NumberOfProduct";
import NumberOfProxy from "main/admin/data/NumberOfProxy";
import NumberOfShop from "main/admin/data/NumberOfShop";
import NumberOfUser from "main/admin/data/NumberOfUser";
import Products from "main/admin/data/Products";
import Shops from "main/admin/data/Shops";

function DataPage() {
  return (
    <>
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
      <Card className="gx-card-widget">
        <Tabs defaultActiveKey="products">
          <Tabs.TabPane tab="Products" key="products">
            <Products />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Shops" key="shops">
            <Shops />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </>
  );
}

export default DataPage;
