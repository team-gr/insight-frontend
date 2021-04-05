import { Card, Tabs } from "antd";

import ActiveVouchers from "main/apps/store-tracking/ActiveVouchers";

function Tracking() {
  return (
    <>
      <Card className="gx-card">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="ACTIVE VOUCHERS" key="1">
            <ActiveVouchers />
          </Tabs.TabPane>
          <Tabs.TabPane tab="FOLLOWERS" key="2"></Tabs.TabPane>
          <Tabs.TabPane tab="SELLER RATINGS" key="3"></Tabs.TabPane>
          <Tabs.TabPane tab="PRODUCTS QUANTITY" key="4"></Tabs.TabPane>
          <Tabs.TabPane tab="CHAT RESPONSE RATE" key="5"></Tabs.TabPane>
        </Tabs>
      </Card>
    </>
  );
}

export default Tracking;
