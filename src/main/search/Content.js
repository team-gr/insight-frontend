import { useContext } from "react";
import { Col, Row, Tag } from "antd";
import CardBox from "components/CardBox";
import Spinner from "components/CircularProgress";
import { Context } from "main/search";

export default function Content() {
  const { state } = useContext(Context);

  console.log({ state });

  if (state.loading) {
    return <Spinner />;
  }
  return (
    <div className="p-4">
      <Row>
        {state.items.map((item, index) => (
          <Col xl={6} lg={6} md={8} sm={12} xs={24} key={index}>
            <Product {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

function Product({
  Name = "",
  Price = 0,
  PriceBeforeDiscount = 0,
  SourceUrl = "",
  Source = "",
  RatingStar = 0,
  ReviewCount = 0,
  Image = "",
}) {
  return (
    <CardBox styleName="gx-card-full -m-2">
      <a href={SourceUrl} target="_blank">
        <div className="gx-slider">
          <img alt="example" src={`https://cf.shopee.vn/file/${Image}`} />
          <div>
            <h4 className="mt-4 ml-4 p-1">{Name}</h4>
            <span className="mt-4 ml-4 text-small">
              <span className="text-gray-500 line-through">
                {PriceBeforeDiscount} {"  "}
              </span>
              <span className="text-red-400">{Price}</span>
            </span>
          </div>
          <div className="my-2 ml-4">
            <Tag color="red">{Source}</Tag>
            <Tag color="blue">{RatingStar} Stars</Tag>
            <Tag color="orange">{ReviewCount} reviews</Tag>
          </div>
        </div>
      </a>
    </CardBox>
  );
}