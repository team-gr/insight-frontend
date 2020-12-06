import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";

import IntlMessages from "components/IntlMessage";
import AppLink from "components/AppLink";

function HorizontalNav() {
  const pathname = useSelector((state) => state.settings.pathname);

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
        key="main"
        title={<IntlMessages id="sidebar.main" />}
      >
        <Menu.Item key="main/search">
          <AppLink href="/main/search">
            <i className="icon icon-widgets" />
            <IntlMessages id="sidebar.search" />
          </AppLink>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        popupClassName="gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve"
        key="competitor-intelligence"
        title={<IntlMessages id="sidebar.competitorIntelligence" />}
      >
        <Menu.Item key="competitor-intelligence/shopee-products">
          <AppLink href="/competitor-intelligence/shopee-products">
            <IntlMessages id="sidebar.shopeeCompetitorProducts" />
          </AppLink>
        </Menu.Item>

        <Menu.Item key="competitor-intelligence/shopee-shops">
          <AppLink href="/competitor-intelligence/shopee-shops">
            <IntlMessages id="sidebar.shopeeCompetitorShops" />
          </AppLink>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

export default HorizontalNav;
