import React from "react";
import { Button, Menu } from "antd";
import { TOKEN_KEY } from "../../config/constants";
import { Link } from "react-router-dom";

const MenuDropdown = () => (
  <Menu>
    <Menu.Item>
      <Link to={"/profile"}>Profile</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={"/your-rivalries"}>Your Rivalries</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
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
    </Menu.Item>
  </Menu>
);

export default MenuDropdown;
