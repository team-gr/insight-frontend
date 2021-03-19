import { Row, Col } from "antd";
import IconWithTextCard from "components/IconWithTextCard";

function Home() {
  return (
    <div>
      <Row>
        <Col xl={8} lg={8} md={8} sm={12} xs={24}>
          <IconWithTextCard
            cardColor="cyan"
            icon="diamond"
            title="1982"
            subTitle="Shops Availiable"
          />
        </Col>
        <Col xl={8} lg={8} md={8} sm={12} xs={24}>
          <IconWithTextCard
            cardColor="orange"
            icon="tasks"
            title="18632"
            subTitle="Products Availiable"
          />
        </Col>
        <Col xl={8} lg={8} md={8} sm={12} xs={24}>
          <IconWithTextCard
            cardColor="teal"
            icon="user"
            title="68"
            subTitle="Active Users"
          />
        </Col>
      </Row>
      <Row>
        <Col xl={8} lg={8} md={8} sm={12} xs={24}>
          <IconWithTextCard
            cardColor="cyan"
            icon="diamond"
            title="10"
            subTitle="Shops Tracking"
          />
        </Col>
        <Col xl={8} lg={8} md={8} sm={12} xs={24}>
          <IconWithTextCard
            cardColor="orange"
            icon="tasks"
            title="32"
            subTitle="Products Tracking"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
