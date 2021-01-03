import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import Widget from "components/Widget";

import { FeatureCompareActions as Actions } from "app-redux/featurecompare";

function FeatureCompare() {
  const dispatch = useDispatch();

  function onRandomItem() {
    dispatch(Actions.randomItem());
    dispatch(Actions.setNotifying(true));
  }

  return (
    <Widget>
      <h2>Compare New Competitor Product</h2>
      <div className="w-full justify-between flex">
        <div className="flex-grow mr-4">
          <Input placeholder="Add Product URL" />
        </div>
        <Button type="primary" onClick={onRandomItem} className="gx-mb-0">
          Compare
        </Button>
      </div>
    </Widget>
  );
}

export default FeatureCompare;
