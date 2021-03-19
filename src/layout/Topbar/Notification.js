import React from "react";
import { Avatar, Popover } from "antd";

import CustomScrollbars from "components/CustomScrollbars";

function AppNotification() {
  return (
    <li className="pt-2">
      <Popover
        overlayClassName="gx-popover-horizantal"
        placement="bottomRight"
        content={<AppNotificationContent />}
        trigger="click"
        children={
          <span className="gx-pointer gx-d-block gx-status-pos">
            <i className="icon icon-product-list" />
            <span className="gx-status gx-status-rtl gx-small gx-orange" />
          </span>
        }
      />
    </li>
  );
}

function AppNotificationContent() {
  const notifications = [
    {
      image: "https://via.placeholder.com/150x150",
      title: "Stella Johnson has recently posted an album",
      time: "4:10 PM",
      icon: "thumb-up gx-text-blue",
    },
    {
      image: "https://via.placeholder.com/150x150",
      title: "Alex Brown has shared Martin Guptil's post",
      time: "5:18 PM",
      icon: "chat gx-text-grey",
    },
    {
      image: "https://via.placeholder.com/640x420",
      title: "Domnic Brown has sent you a group invitation for Global Health",
      time: "5:36 PM",
      icon: "birthday text-info",
    },
    {
      image: "https://via.placeholder.com/150x150",
      title: "John Smith has birthday today",
      time: "5:54 PM",
      icon: "birthday gx-text-warning",
    },
    {
      image: "https://via.placeholder.com/150x150",
      title: "Chris has updated his profile picture",
      time: "5:25 PM",
      icon: "profile gx-text-grey",
    },
  ];

  return (
    <>
      <div className="gx-popover-header">
        <h3 className="gx-mb-0">Notifications</h3>
      </div>
      <CustomScrollbars className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          {notifications.map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
        </ul>
      </CustomScrollbars>
    </>
  );
}

const NotificationItem = ({ notification }) => {
  const { icon, image, title, time } = notification;
  return (
    <li className="gx-media">
      <Avatar className="gx-size-40 gx-mr-3" alt={image} src={image} />
      <div className="gx-media-body gx-align-self-center">
        <p className="gx-fs-sm gx-mb-0">{title}</p>
        <i className={`icon icon-${icon} gx-pr-2`} />{" "}
        <span className="gx-meta-date">
          <small>{time}</small>
        </span>
      </div>
    </li>
  );
};

export default AppNotification;
