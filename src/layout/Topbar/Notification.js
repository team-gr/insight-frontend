import { Tag, Avatar, Popover } from "antd";
import { useSelector, useDispatch } from "react-redux";

import CustomScrollbars from "components/CustomScrollbars";

import { timestampFormatter } from "helpers";
import { NotificatioActions } from "app-redux/notification";

function AppNotification() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notification.items);

  return (
    <li className="pt-2">
      <Popover
        onVisibleChange={(visible) => {
          if (!visible) {
            dispatch(NotificatioActions.maskAsRead(notifications));
          }
        }}
        overlayClassName="gx-popover-horizantal"
        placement="bottomRight"
        content={<AppNotificationContent notifications={notifications} />}
        trigger="click"
        children={
          <span
            className={`gx-pointer gx-d-block ${
              unreadCount(notifications) > 0 && "gx-status-pos"
            }`}
          >
            <i className="icon icon-product-list" />
            <span className="gx-status gx-status-rtl gx-small gx-orange" />
          </span>
        }
      />
    </li>
  );
}

function AppNotificationContent({ notifications = [] } = {}) {
  return (
    <>
      <div className="gx-popover-header">
        <h3 className="gx-mb-0">Notifications</h3>
      </div>
      <CustomScrollbars className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </ul>
      </CustomScrollbars>
    </>
  );
}

const NotificationItem = ({ notification }) => {
  const { image, title, timestamp, read } = notification;

  return (
    <li className="gx-media">
      <Avatar className="gx-size-40 gx-mr-3" alt={image} src={image} />
      <div className="gx-media-body gx-align-self-center">
        <p className="gx-fs-sm gx-mb-0">{title}</p>
        <div className="mt-2 flex">
          <Tag color="blue">{timestampFormatter(timestamp)}</Tag>
          <Tag color={read ? "default" : "orange"}>
            {read ? "read" : "unread"}
          </Tag>
        </div>
      </div>
    </li>
  );
};

function unreadCount(notifications) {
  return notifications.filter((i) => !i.read).length;
}

export default AppNotification;
