import { Col, Row, Tabs, Card } from "antd";

import GeneralTab from "main/my-account/GeneralTab";
import NotificationTab from "main/my-account/NotificationTab";

import { AVATAR_ROOT_URL } from "app-constants";

function MyAccount() {
  return (
    <>
      <div className="gx-main-content">
        <Row>
          <Col xl={6} lg={6} md={6} sm={6} xs={24}>
            <div className="gx-profileon">
              <img
                src={
                  AVATAR_ROOT_URL + "ee262c90-b609-4a02-b4b2-4431cbd306b1.jpeg"
                }
                alt=""
              />
            </div>

            <div className="gx-follower gx-text-center">
              <ul className="gx-follower-list">
                <li>
                  <span className="gx-follower-title">20</span>
                  <span>Products</span>
                </li>
                <li>
                  <span className="gx-follower-title">6</span>
                  <span>Store</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={18} lg={18} md={18} sm={18} xs={24}>
            <Card className="gx-card">
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="General" key="1">
                  <GeneralTab />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Notifications" key="2">
                  <NotificationTab />
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default MyAccount;
