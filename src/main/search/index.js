import React, { PureComponent } from "react";
import { Button, Checkbox, Drawer, Dropdown, Menu, message } from "antd";
import CustomScrollbars from "components/CustomScrollbars";

import mails from "main/search/data/mails";
import folders from "main/search/data/folders";
import filters from "main/search/data/filters";
import labels from "main/search/data/labels";
import options from "main/search/data/options";
import MailList from "main/search/MailList";
import SearchBar from "main/search/SearchBar";
import IntlMessages from "components/IntlMessage";
import CircularProgress from "components/CircularProgress";

export default function Search() {
  return (
    <div className="gx-main-content">
      <div className="gx-app-module">
        <div className="gx-d-block gx-d-lg-none">
          <Drawer
            placement="left"
            closable={false}
            visible={false}
            onClose={console.log}
            children={<SideBar />}
          />
        </div>
        <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
          <SideBar />
        </div>

        <div className="gx-module-box">
          <div className="gx-module-box-header">
            <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
              <i className="icon icon-menu gx-icon-btn" aria-label="Menu" />
            </span>
            <SearchBar />
          </div>

          <div className="gx-module-box-content"></div>
        </div>
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-shopping-cart gx-mr-4" />
          SearchBox
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <ul className="gx-module-nav">
            <li className="gx-module-nav-label">
              <IntlMessages id="sidebar.mail.filters" />
            </li>
            <li>
              <div className="gx-link">
                <div className="flex items-center content-center">
                  <img alt="shopee-icon" src="/shopee_icon.png" width={30} />
                  <div>Shopee</div>
                </div>
              </div>
            </li>
          </ul>
        </CustomScrollbars>
      </div>
    </div>
  );
}
