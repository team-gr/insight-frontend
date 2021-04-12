import { useRouter } from "next/router";
import { Card, Tabs } from "antd";

import ActiveVouchers from "main/apps/store-tracking/ActiveVouchers";
import Followers from "main/apps/store-tracking/Followers";
import ProductQuantity from "main/apps/store-tracking/ProductsQuantity";
import Ratings from "main/apps/store-tracking/Ratings";

function Tracking() {
  const { query } = useRouter();

  return (
    <>
      <Card className="gx-card">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="ACTIVE VOUCHERS" key="1">
            <ActiveVouchers shopid={query.id} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="FOLLOWERS" key="2">
            <Followers shopid={query.id} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="PRODUCTS QUANTITY" key="4">
            <ProductQuantity shopid={query.id} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="SELLER RATINGS" key="3">
            <Ratings shopid={query.id} />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </>
  );
}

export default Tracking;
