import React, { useState } from "react";
import Headroom from "react-headroom";
import logo from "../../assets/rivalry-logo.svg";

import { Button, Divider, Drawer } from "antd";
import { Link } from "react-router-dom";

import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { isAuthenticated } from "../../services/auth";
import { TOKEN_KEY } from "../../config/constants";

const Header = () => {
  const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
  return (
    <Headroom>
      <div className={"menu-navbar"}>
        <img src={logo} className={"logo-img"} />

        <div className={"menu-links"}>
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/top">Top Rivalries</Link>
          <Link to="/create">Create</Link>
        </div>

        <div>
          <Button type={"link"}>
            <SearchOutlined className={"menu-search-icon"} />
          </Button>
          {isAuthenticated() ? (
            <Button
              onClick={() => {
                localStorage.removeItem(TOKEN_KEY);
                window.location.reload();
              }}
              type={"link"}
              className={"menu-login"}
            >
              Leave
            </Button>
          ) : (
            <Link to={"/login"} className={"menu-login"}>
              Login
            </Link>
          )}
          <MenuOutlined
            className={"menu-menu-icon"}
            onClick={() => setOpenResponsiveMenu((prevValue) => !prevValue)}
          />
        </div>
      </div>

      <Drawer
        placement={"top"}
        closable={true}
        onClose={() => setOpenResponsiveMenu(false)}
        visible={openResponsiveMenu}
        key={"top"}
        className={"responsive-drawer"}
      >
        <div className={"menu-responsive"}>
          <div className={"menu-links-responsive"}>
            <Link to="/">Home</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/top">Top Rivalries</Link>
            <Link to="/create">Create</Link>
            <Divider className={"divider-responsive"} />
            {isAuthenticated() ? (
              <Button
                onClick={() => {
                  localStorage.removeItem(TOKEN_KEY);
                  window.location.reload();
                }}
                type={"link"}
                className={"menu-login-responsive"}
              >
                Leave
              </Button>
            ) : (
              <Link to={"/login"} className={"menu-login-responsive"}>
                Login
              </Link>
            )}
          </div>
        </div>
      </Drawer>
    </Headroom>
  );
};

export default Header;
