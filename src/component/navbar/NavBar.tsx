import { useLocation, useNavigate } from "react-router-dom";
import { urlPaths } from "../../routing/urlPaths";
import { Menu, type MenuProps, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const { HOME_PATH, CONTACTUS_PATH, PROJECT_PATH } = urlPaths;
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const redirectFunction = (e: string) => {
    if (e === "home") navigate(HOME_PATH);
    if (e === "project") navigate(PROJECT_PATH);
    if (e === "contact") navigate(CONTACTUS_PATH);
    setOpen(false); // close drawer on click
  };

  const getSelectedKey = () => {
    if (location.pathname.includes("project")) return ["project"];
    if (location.pathname.includes("contact-us")) return ["contact"];
    return ["home"];
  };

  const items: MenuProps["items"] = [
    { label: "Home", key: "home" },
    { label: "Project", key: "project" },
    { label: "Contact Us", key: "contact" },
  ];

  return (
    <div className="navbar-conatiner">
      {/* DESKTOP MENU */}
      <div className="desktop-menu">
        <Menu
          onClick={(e) => redirectFunction(e.key)}
          mode="horizontal"
          items={items}
          className="menu-items"
          selectedKeys={getSelectedKey()}
        />
      </div>

      {/* MOBILE BURGER */}
      <div className="mobile-menu">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
          className="burger-btn"
        />
      </div>

      {/* DRAWER */}
      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        closable={false}
        className="menu-drawer"
      >
        <Menu
          onClick={(e) => redirectFunction(e.key)}
          mode="vertical"
          items={items}
          selectedKeys={getSelectedKey()}
        />
      </Drawer>
    </div>
  );
};

export default NavBar;
