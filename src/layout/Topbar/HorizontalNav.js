import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";

import IntlMessages from "components/IntlMessage";
import AppLink from "components/AppLink";

function HorizontalNav() {
  const pathname = useSelector((state) => state.settings.pathname);
  const user = useSelector((state) => state.auth.user);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal"
    >
      <Menu.SubMenu
        popupClassName="gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve"
        key="apps"
        title={<IntlMessages id="sidebar.apps" />}
      >
        <Menu.Item key="competitor-products">
          <AppLink href="/competitor-products">
            <i className="icon icon-orders" />
            <span>Competitor Products</span>
          </AppLink>
        </Menu.Item>

        <Menu.Item key="competitor-stores">
          <AppLink href="/competitor-stores">
            <i className="icon icon-geo-location" />
            <span>Competitor Stores</span>
          </AppLink>
        </Menu.Item>
      </Menu.SubMenu>

      {user.role === "admin" && (
        <Menu.SubMenu
          popupClassName="gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve"
          key="admin"
          title={<IntlMessages id="sidebar.admin" />}
        >
          <Menu.Item key="users">
            <AppLink href="/users">
              <i className="icon icon-user" />
              <IntlMessages id="sidebar.users" />
            </AppLink>
          </Menu.Item>
        </Menu.SubMenu>
      )}
    </Menu>
  );
}

export default HorizontalNav;
