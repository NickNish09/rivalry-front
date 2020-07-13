import React from "react";
import Headroom from "react-headroom";
import logo from "../../assets/rivalry-logo.svg";

import { Button } from "antd";
import { Link } from "react-router-dom";

import { SearchOutlined } from "@ant-design/icons";
import { isAuthenticated } from "../../services/auth";
import { TOKEN_KEY } from "../../config/constants";

const Header = () => {
  return (
    <Headroom>
      <div className={"menu-navbar"}>
        <img src={logo} className={"logo-img"} />

        <div className={"menu-links"}>
          <Link to="/">Home</Link>
          <Link to="/app">Trending</Link>
          <Link to="/app">Top Rivalries</Link>
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
              className={"menu-login"}
            >
              Leave
            </Button>
          ) : (
            <Link to={"/login"} className={"menu-login"}>
              Login
            </Link>
          )}
        </div>
      </div>
    </Headroom>
  );
};

export default Header;
