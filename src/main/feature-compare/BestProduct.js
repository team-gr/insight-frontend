import { Card, Radio } from "antd";
import { vndFormatter } from "helpers";

import isEmpty from "lodash/isEmpty";

import useBest from "main/feature-compare/use-best";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

function BestProduct() {
  const { best, options, setOption } = useBest();

  return (
    <Card title="Best product for you">
      <div className="flex">
        <div className="w-1/3">
          <Radio.Group onChange={(e) => setOption(e.target.value)}>
            {options.map((option) => (
              <Radio style={radioStyle} value={option.value} key={option.value}>
                {option.text}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        {!isEmpty(best) && (
          <div className="w-2/3">
            <span>{best.name}</span>
            <div className="flex mt-4">
              <img
                src={`https://cf.shopee.vn/file/${best.image}`}
                className="rounded-lg"
                width="160"
              />
              <ul className="list-disc">
                <li>Price: {vndFormatter(best.price)}</li>
                <li>
                  Price before discount:{" "}
                  {vndFormatter(best.price_before_discount)}
                </li>
                <li>Discount: {best.discount}%</li>
                <li>Rating star: {best.rating_star}</li>
                <li>View count: {best.view_count}</li>
                <li>Liked count: {best.liked_count}</li>
                <li>Review count: {best.review_count}</li>
                <li>Stock: {best.stock}</li>
                <li>Sold: {best.sold}</li>
                <li>Shop Location: {best.shop_location}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default BestProduct;
