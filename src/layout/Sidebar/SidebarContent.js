import React, { useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import IntlMessages from "components/IntlMessage";
import AppLink from "components/AppLink";

import { SettingActions } from "app-redux/settings";

function SidebarContent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = useSelector((state) => state.settings.pathname);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(SettingActions.setPathname(router.pathname));
  }, [router.pathname]);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <>
      <div className="gx-layout-sider-header">
        <Link href="/">
          <a className="gx-site-logo">
            <img alt="logo2" src="/images/logo.png" />
          </a>
        </Link>
      </div>
      <div className="gx-sidebar-content">
        <Menu
          defaultOpenKeys={[defaultOpenKeys]}
          selectedKeys={[selectedKeys]}
          theme="dark"
          mode="inline"
        >
          <Menu.ItemGroup
            key="apps"
            className="gx-menu-group"
            title={<IntlMessages id="sidebar.apps" />}
          >
            <Menu.Item key="search">
              <AppLink href="/search">
                <i className="icon icon-search" />
                <span>
                  <IntlMessages id="sidebar.search" />
                </span>
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
          </Menu.ItemGroup>

          {user.role === "admin" && (
            <Menu.ItemGroup
              key="admin"
              className="gx-menu-group"
              title={<IntlMessages id="sidebar.admin" />}
            >
              <Menu.Item key="users">
                <AppLink href="/users">
                  <i className="icon icon-user" />
                  <span>
                    <IntlMessages id="sidebar.users" />
                  </span>
                </AppLink>
              </Menu.Item>
            </Menu.ItemGroup>
          )}
        </Menu>
      </div>
    </>
  );
}

export default SidebarContent;
