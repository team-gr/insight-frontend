import React from "react";
import Link from "next/link";
import { Layout, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";

import CustomScrollbars from "components/CustomScrollbars";

import AppNotification from "layout/Topbar/Notification";
import AppFeatureCompare from "layout/Topbar/FeatureCompare";
import HorizontalNav from "layout/Topbar/HorizontalNav";
import UserInfo from "layout/Topbar/UserInfo";
import languages from "layout/Topbar/languages";

import { SettingActions } from "app-redux/settings";

function TopBar() {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.settings.locale);
  const navCollapsed = useSelector((state) => state.settings.navCollapsed);

  const languageMenu = () => (
    <CustomScrollbars className="gx-popover-lang-scroll">
      <ul className="gx-sub-popover">
        {languages.map((language) => (
          <li
            className="gx-media gx-pointer"
            key={language.languageId}
            onClick={(e) => dispatch(SettingActions.switchLanguage(language))}
          >
            <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`} />
            <span className="gx-language-text">{language.name}</span>
          </li>
        ))}
      </ul>
    </CustomScrollbars>
  );

  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal">
      <Layout.Header className="gx-header-horizontal-main">
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">
            <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3 6e">
              <i
                className="gx-icon-btn icon icon-menu"
                onClick={() => {
                  dispatch(
                    SettingActions.toggleCollapsedSideNav(!navCollapsed)
                  );
                }}
              />
            </div>
            <Link href="/">
              <a>
                <img
                  alt=""
                  className="gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo"
                  src="/images/w-logo.png"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img
                  alt=""
                  className="gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
                  src="/images/logo.png"
                />
              </a>
            </Link>

            <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block">
              <HorizontalNav />
            </div>
            <ul className="gx-header-notifications gx-ml-auto">
              <AppFeatureCompare />
              <li className="gx-language">
                <Popover
                  overlayClassName="gx-popover-horizantal"
                  placement="bottomRight"
                  content={languageMenu()}
                  trigger="click"
                >
                  <span className="gx-pointer gx-flex-row gx-align-items-center">
                    <i className={`flag flag-24 flag-${locale.icon}`} />
                  </span>
                </Popover>
              </li>
              <li className="gx-user-nav">
                <UserInfo />
              </li>
            </ul>
          </div>
        </div>
      </Layout.Header>
    </div>
  );
}

export default TopBar;
