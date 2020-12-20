import React from "react";
import { Avatar, Popover } from "antd";
import { useDispatch } from "react-redux";
import { AuthActions } from "app-redux/auth";

function UserInfo() {
  const dispatch = useDispatch();

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li onClick={() => dispatch(AuthActions.logout())}>Logout</li>
    </ul>
  );

  return (
    <Popover
      overlayClassName="gx-popover-horizantal"
      placement="bottomRight"
      content={userMenuOptions}
      trigger="click"
    >
      <Avatar
        src="/images/avatar/domnic-harris.png"
        className="gx-avatar gx-pointer"
        alt=""
      />
    </Popover>
  );
}

export default UserInfo;
