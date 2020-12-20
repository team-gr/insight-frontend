import { Avatar, Popover } from "antd";
import { useSelector, useDispatch } from "react-redux";

import CustomScrollbars from "components/CustomScrollbars";

import { FeatureCompareActions as Actions } from "app-redux/featurecompare";

function AppFeatureCompare() {
  const dispatch = useDispatch();
  const notifying = useSelector((state) => state.featurecompare.notifying);

  return (
    <li className="gx-notify">
      <Popover
        overlayClassName="gx-popover-horizantal"
        placement="bottomRight"
        content={<FeatureCompareContent />}
        trigger="click"
        onClick={() => dispatch(Actions.setNotifying(false))}
        children={
          <span className="gx-pointer gx-d-block gx-status-pos">
            <i className="icon icon-product-list" />
            {notifying && (
              <span className="gx-status gx-status-rtl gx-small gx-orange" />
            )}
          </span>
        }
      />
    </li>
  );
}

function FeatureCompareContent() {
  const items = useSelector((state) => state.featurecompare.items);

  return (
    <>
      <div className="gx-popover-header">
        <h3 className="gx-mb-0">Selected Products</h3>
      </div>
      <CustomScrollbars className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          {items.map((product, index) => (
            <CompareItem key={index} {...product} />
          ))}
        </ul>
      </CustomScrollbars>
    </>
  );
}

function CompareItem({ image, name, itemid } = {}) {
  const dispatch = useDispatch();

  function onRemove() {
    dispatch(Actions.removeItem(itemid));
  }

  return (
    <li className="gx-media">
      <div className="mr-2">
        <Avatar
          shape="square"
          size={64}
          alt=""
          src={`https://cf.shopee.vn/file/${image}`}
        />
      </div>
      <div className="gx-media-body gx-align-self-center">
        <p className="gx-fs-sm gx-mb-0">{name}</p>
        <span onClick={onRemove} className="gx-btn gx-btn-sm mt-1">
          <i className="icon icon-trash gx-pr-2" />
          Remove
        </span>
      </div>
    </li>
  );
}

export default AppFeatureCompare;
