import { useRouter } from "next/router";
import { Button, Tag, message } from "antd";
import { ItemServices } from "services";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import differenceInHours from "date-fns/differenceInHours";
import { SyncOutlined } from "@ant-design/icons";
import { useItem } from "hooks";

function ProductLastUpdate({ onUpdateSuccess, itemid }) {
  const { query } = useRouter();
  const [item, loading, refresh] = useItem(itemid);

  async function onUpdate() {
    const done = message.loading("updating product...");
    try {
      await ItemServices.update({
        itemid: parseInt(item.id, 10),
        shopid: parseInt(item.shopid, 10),
      });
      await refresh();
      await onUpdateSuccess();
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

  const shouldUpdate =
    differenceInHours(Date.now(), new Date(item.last_checked)) > 6;

  return (
    <div>
      <Tag color={shouldUpdate ? "yellow" : "green"}>
        Update {formatDistanceToNow(new Date(item.last_checked))} ago
      </Tag>

      <Button
        icon={<SyncOutlined />}
        size="small"
        style={{ marginBottom: 0 }}
        onClick={onUpdate}
      />
    </div>
  );
}

export default ProductLastUpdate;
