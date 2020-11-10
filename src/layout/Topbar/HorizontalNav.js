import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";

import IntlMessages from "components/IntlMessage";
import AppLink from "components/AppLink";

function HorizontalNav() {
  const pathname = useSelector((state) => state.settings.pathname);

  function getNavStyleSubMenuClass() {
    return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
  }

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal"
    >
      <Menu.SubMenu
        popupClassName={getNavStyleSubMenuClass()}
        key="main"
        title={<IntlMessages id="sidebar.main" />}
      >
        <Menu.Item key="main/search">
          <AppLink href="/main/search">
            <i className="icon icon-widgets" />
            <IntlMessages id="sidebar.widgets" />
          </AppLink>
        </Menu.Item>

        <Menu.Item key="main/metrics">
          <AppLink href="/main/metrics">
            <i className="icon icon-apps" />
            <IntlMessages id="sidebar.metrics" />
          </AppLink>
        </Menu.Item>

        <Menu.Item key="main/algolia">
          <AppLink href="/main/algolia">
            <i className="icon icon-shopping-cart " />
            <IntlMessages id="sidebar.algolia" />
          </AppLink>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

export default HorizontalNav;
