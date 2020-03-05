import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import config from "../../../config/config";
import { list as sideMenu } from "../../../config/menu";
import brandLogo from "../../../img/brand-logo.png";
import clientUtils from "../../../utils/client";
import { isAllowed } from "../../../utils/resource";
import "./Menu.scss";

export default function SidebarMenu({ sideBarMenu }) {
  const SideBarMenu = sideBarMenu;

  return (
    <ul className="nav">
      <SideBarMenu />
    </ul>
  );
}
