import { Col, Row, Tag } from "antd";
import CardBox from "components/CardBox";

export default function Content() {
  return (
    <div className="p-4">
      <Row>
        {Array(20)
          .fill(0)
          .map((product, index) => (
            <Col xl={6} lg={6} md={8} sm={12} xs={24} key={index}>
              <Product />
            </Col>
          ))}
      </Row>
    </div>
  );
}

function Product() {
  return (
    <CardBox styleName="gx-card-full -m-2">
      <div className="gx-slider">
        <img
          alt="example"
          src="https://cf.shopee.vn/file/4c9c05be289167e68918129445b2650b_tn"
        />
        <div>
          <h4 className="mt-4 ml-4">Áo khoác Kaki</h4>
          <span className="mt-4 ml-4 text-small">
            <span className="text-gray-500 line-through">đ65.999</span>{" "}
            <span className="text-red-400">đ65.999</span>
          </span>
        </div>
        <div className="my-2 ml-4">
          <Tag color="red">Shopee</Tag>
          <Tag color="blue">Free Ship</Tag>
        </div>
      </div>
    </CardBox>
  );
}
