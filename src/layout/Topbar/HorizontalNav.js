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
        key="apps"
        title={<IntlMessages id="sidebar.apps" />}
      >
        <Menu.Item key="search">
          <AppLink href="/search">
            <i className="icon icon-search" />
            <IntlMessages id="sidebar.search" />
          </AppLink>
        </Menu.Item>

        <Menu.SubMenu
          popupClassName="gx-menu-horizontal"
          key="competitor-intelligence"
          title={
            <span>
              <i className="icon icon-dasbhoard" />
              <IntlMessages id="sidebar.competitorIntelligence" />
            </span>
          }
        >
          <Menu.Item key="competitor-intelligence/shopee-products">
            <AppLink href="/competitor-intelligence/shopee-products">
              <IntlMessages id="sidebar.competitorProducts" />
            </AppLink>
          </Menu.Item>

          <Menu.Item key="competitor-intelligence/shopee-shops">
            <AppLink href="/competitor-intelligence/shopee-shops">
              <IntlMessages id="sidebar.competitorShops" />
            </AppLink>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="keyword-research">
          <AppLink href="/keyword-research">
            <i className="icon icon-popover" />
            <IntlMessages id="sidebar.keywordResearch" />
          </AppLink>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

export default HorizontalNav;
