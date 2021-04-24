import { Button } from "antd";

import { vndFormatter } from "helpers";

function Product({
  id,
  name,
  image,
  price,
  price_before_discount,
  selected,
  setSelected,
}) {
  function onSelect() {
    if (selected) {
      setSelected((items) => items.filter((i) => i != id));
      return;
    }

    setSelected((items) => [...items, id]);
  }

  function wrapperClassname() {
    if (selected) {
      return "gx-product-item gx-product-vertical border-2 border-dashed border-green-500";
    }
    return "gx-product-item gx-product-vertical";
  }

  return (
    <div className={wrapperClassname()}>
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <span className="gx-link gx-grid-thumb-cover">
            <img alt="Remy Sharp" src={image} />
          </span>
        </div>
      </div>

      <div className="gx-product-body">
        <h3 className="gx-product-title">{name}</h3>
        <div className="flex">
          <span className="mr-2 line-through text-gray-400">
            {vndFormatter(price_before_discount / 100000)}{" "}
          </span>
          <span className="text-red-400">{vndFormatter(price / 100000)}</span>
        </div>
      </div>

      <div className="gx-product-footer">
        <Button type={selected ? "primary" : "default"} onClick={onSelect}>
          {selected ? "Selected" : "Select"}
        </Button>
      </div>
    </div>
  );
}

export default Product;
