import { useContext } from "react";
import { Col, Row, Tag, Button } from "antd";
import { useDispatch } from "react-redux";

import CardBox from "components/CardBox";
import Spinner from "components/CircularProgress";

import { Context } from "main/search";
import { FeatureCompareActions } from "app-redux/featurecompare";

export default function Content() {
  const { state } = useContext(Context);

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

function Product(item = {}) {
  const dispatch = useDispatch();

  const {
    itemid,
    shopid,
    name,
    image,
    brand,
    source,
    source_url,
    price,
    price_before_discount,
    discount,
    rating_star,
    review_count,
  } = item;

  return (
    <CardBox styleName="gx-card-full -m-2">
      <div className="gx-slider">
        <a href={source_url} target="_blank">
          <img alt="example" src={`https://cf.shopee.vn/file/${image}`} />
        </a>
        <div>
          <h4 className="mt-4 ml-4 p-1">{name}</h4>
          <span className="mt-4 ml-4 text-small">
            <span className="text-gray-500 line-through">
              {price_before_discount}
            </span>
            <span className="text-red-400">{price}</span>
          </span>
        </div>
        <div className="flex justify-center mt-2">
          <Button
            size="small"
            type="primary"
            onClick={() => dispatch(FeatureCompareActions.appendItem(item))}
            children="Add to Compare"
          />
        </div>
        <div className="my-2 ml-4">
          <Tag color="red">{source}</Tag>
          <Tag color="blue">{rating_star} Stars</Tag>
          <Tag color="orange">{review_count} reviews</Tag>
        </div>
      </div>
    </CardBox>
  );
}
