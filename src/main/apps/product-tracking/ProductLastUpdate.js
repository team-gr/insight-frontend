import { useState } from "react";
import { Button, Tag, message, Select } from "antd";
import { useInterval } from "hooks";
import { SyncOutlined, LoadingOutlined } from "@ant-design/icons";

import { ItemServices } from "services";

function ProductLastUpdate({ onUpdateSuccess, itemid, shopid }) {
  const [updateInterval, setUpdateInterval] = useState(15000);
  const [updating, setUpdating] = useState(false);

  useInterval(async () => {
    setUpdating(true);
    try {
      await ItemServices.update({ itemid, shopid, useProxy: true });
      await onUpdateSuccess();
    } catch (error) {
      console.log(error);
    } finally {
      setUpdating(false);
    }
  }, updateInterval);

  async function onUpdate() {
    const done = message.loading("updating product...");
    try {
      await ItemServices.update({ itemid, shopid, useProxy: true });
      message.success("Update product done!");
    } catch (error) {
      console.log(error);
      message.error("proxy error, please try again");
    } finally {
      done();
    }
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
        <Select.Option value={15000}>15 (s)</Select.Option>
        <Select.Option value={20000}>20 (s)</Select.Option>
        <Select.Option value={30000}>30 (s)</Select.Option>
        <Select.Option value={60000}>60 (s)</Select.Option>
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
