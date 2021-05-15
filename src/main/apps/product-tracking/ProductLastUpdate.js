import { useState } from "react";
import { Button, Tag, message, Select } from "antd";
import { useItem, useInterval } from "hooks";
import { sleep } from "helpers";
import { SyncOutlined, LoadingOutlined } from "@ant-design/icons";

function ProductLastUpdate({ onUpdateSuccess, itemid }) {
  const [item, loading, refresh] = useItem(itemid);
  const [updateInterval, setUpdateInterval] = useState(5000);
  const [updating, setUpdating] = useState(false);

  useInterval(async () => {
    setUpdating(true);
    await sleep(1000);
    await onUpdateSuccess();
    setUpdating(false);
  }, updateInterval);

  async function onUpdate() {
    const done = message.loading("updating product...");
    try {
      await sleep(1000);
      message.success("Update product done!");
    } catch (error) {
      console.log(error);
      message.error("proxy error, please try again");
    } finally {
      done();
    }
  }

  if (loading) {
    return null;
  }

  return (
    <div>
      <Tag color="green">
        {updating ? (
          <div>
            Updating... <LoadingOutlined spin />
          </div>
        ) : (
          "Update interval"
        )}
      </Tag>

      <Select
        style={{ width: 80 }}
        size="small"
        value={updateInterval}
        onChange={setUpdateInterval}
      >
        <Select.Option value={5000}>5 (s)</Select.Option>
        <Select.Option value={10000}>10 (s)</Select.Option>
        <Select.Option value={20000}>20 (s)</Select.Option>
        <Select.Option value={30000}>30 (s)</Select.Option>
        <Select.Option value={null}>Off</Select.Option>
      </Select>

      <Button
        icon={<SyncOutlined />}
        size="small"
        style={{ marginBottom: 0, marginLeft: 10 }}
        onClick={onUpdate}
      />
    </div>
  );
}

export default ProductLastUpdate;
