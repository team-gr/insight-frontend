import React, { useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import SidebarLogo from "layout/Sidebar/SidebarLogo";
import IntlMessages from "components/IntlMessage";

import { SettingActions } from "app-redux/settings";

function SidebarContent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = useSelector((state) => state.settings.pathname);

  useEffect(() => {
    dispatch(SettingActions.setPathname(router.pathname));
  }, [router.pathname]);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  console.log({ selectedKeys, defaultOpenKeys });
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <Menu
          defaultOpenKeys={[defaultOpenKeys]}
          selectedKeys={[selectedKeys]}
          theme="dark"
          mode="inline"
        >
          <Menu.ItemGroup
            key="main"
            className="gx-menu-group"
            title={<IntlMessages id="sidebar.main" />}
          >
            <Menu.Item key="main/widgets">
              <Link href="/main/widgets">
                <a>
                  <i className="icon icon-widgets" />
                  <span>
                    <IntlMessages id="sidebar.widgets" />
                  </span>
                </a>
              </Link>
            </Menu.Item>

            <Menu.Item key="main/metrics">
              <Link href="/main/metrics">
                <a>
                  <i className="icon icon-apps" />
                  <span>
                    <IntlMessages id="sidebar.metrics" />
                  </span>
                </a>
              </Link>
            </Menu.Item>

            <Menu.Item key="main/layouts">
              <Link href="/main/layouts">
                <a>
                  <i className="icon icon-card" />
                  <span>
                    <IntlMessages id="sidebar.layouts" />
                  </span>
                </a>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </div>
    </>
  );
}

export default SidebarContent;
