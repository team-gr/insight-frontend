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
              <i className="icon icon-dashboard" />
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

        <Menu.Item key="feature-compare">
          <AppLink href="/feature-compare">
            <i className="icon icon-product-list" />
            <IntlMessages id="sidebar.featureCompare" />
          </AppLink>
        </Menu.Item>
        
        {/* explore */}
        <Menu.SubMenu
          popupClassName="gx-menu-horizontal"
          key="explore"
          title={
            <span>
              <i className="icon icon-spin" />
              <IntlMessages id="sidebar.explore" />
            </span>
          }
        >
          <Menu.Item key="explore/shops">
            <AppLink href="/explore/shops">
              <IntlMessages id="sidebar.explore.shops" />
            </AppLink>
          </Menu.Item>
        </Menu.SubMenu>

        {/* manage */}
        <Menu.SubMenu
          popupClassName="gx-menu-horizontal"
          key="manage"
          title={
            <span>
              <i className="icon icon-wysiwyg" />
              <IntlMessages id="sidebar.manage" />
            </span>
          }
        >
          <Menu.Item key="manage/shops">
            <AppLink href="/manage/followed-products">
              <IntlMessages id="sidebar.manage.followedProducts" />
            </AppLink>
          </Menu.Item>
        </Menu.SubMenu>
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
