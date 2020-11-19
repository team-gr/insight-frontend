import React, { useState, useReducer } from "react";
import { Drawer } from "antd";
import CustomScrollbars from "components/CustomScrollbars";

import SearchBar from "main/search/SearchBar";
import Content from "main/search/Content";
import IntlMessages from "components/IntlMessage";

export const Context = React.createContext();

export const actions = {
  SET_LOADING: "set_loading",
  SET_ITEMS: "set_items",
};

const initialState = { loading: false, items: [] };

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_LOADING:
      return { ...state, loading: action.payload };
    case actions.SET_ITEMS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

export default function Search() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={open}
              onClose={() => setOpen(false)}
              children={<SideBar />}
            />
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            <SideBar />
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                <i
                  className="icon icon-menu gx-icon-btn"
                  aria-label="Menu"
                  onClick={() => setOpen(!open)}
                />
              </span>
              <SearchBar />
            </div>

            <div className="gx-module-box-content bg-gray-300">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
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
              <div className="gx-link active">
                <i className="icon icon-tab" />
                <div>Shopee</div>
              </div>
            </li>
            <li>
              <div className="gx-link">
                <i className="icon icon-star" />
                <div>Tiki</div>
              </div>
            </li>
            <li>
              <div className="gx-link active">
                <i className="icon icon-sent" />
                <div>Lazada</div>
              </div>
            </li>
          </ul>
          <ul className="gx-module-nav">
            <li className="gx-module-nav-label">Sort</li>
            <li>
              <div className="gx-link ">
                <div>Phổ biến</div>
              </div>
            </li>
            <li>
              <div className="gx-link">
                <div>Mới nhất</div>
              </div>
            </li>
            <li>
              <div className="gx-link ">
                <div>Bán chạy nhất</div>
              </div>
            </li>
          </ul>
        </CustomScrollbars>
      </div>
    </div>
  );
}
