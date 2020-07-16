import React, { useState } from "react";
import Headroom from "react-headroom";
import logo from "../../assets/thunder.png";

import { Avatar, Button, Divider, Drawer, Dropdown } from "antd";
import { Link } from "react-router-dom";

import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { isAuthenticated } from "../../services/auth";
import { TOKEN_KEY } from "../../config/constants";
import Search from "./Search";
import MenuDropdown from "./MenuDropdown";

const Header = () => {
  const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const dismissDrawer = () => {
    setOpenResponsiveMenu(false);
  };
  return (
    <Headroom>
      <div className={"menu-navbar"}>
        <Link to="/">
          <img src={logo} className={"logo-img"} />
        </Link>

        <div className={"menu-links"}>
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/top">Top Rivalries</Link>
          <Link to="/create">Create</Link>
        </div>

        <div>
          <Button
            type={"link"}
            onClick={() => setIsSearching((prevValue) => !prevValue)}
          >
            <SearchOutlined className={"menu-search-icon"} />
          </Button>
          {isAuthenticated() ? (
            <Dropdown overlay={MenuDropdown} className={"dropdown-profile"}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </a>
            </Dropdown>
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
        onClose={() => setIsSearching(false)}
        visible={isSearching}
        key={"search"}
        className={"search-drawer"}
      >
        <Search isSearching={isSearching} setIsSearching={setIsSearching} />
      </Drawer>

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
            <Link to="/" onClick={dismissDrawer}>
              Home
            </Link>
            <Link to="/trending" onClick={dismissDrawer}>
              Trending
            </Link>
            <Link to="/top" onClick={dismissDrawer}>
              Top Rivalries
            </Link>
            <Link to="/create" onClick={dismissDrawer}>
              Create
            </Link>
            <Link to={"/profile"} onClick={dismissDrawer}>
              Profile
            </Link>
            <Link to={"/your-rivalries"} onClick={dismissDrawer}>
              Your Rivalries
            </Link>
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
              <Link
                to={"/login"}
                className={"menu-login-responsive"}
                onClick={dismissDrawer}
              >
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
