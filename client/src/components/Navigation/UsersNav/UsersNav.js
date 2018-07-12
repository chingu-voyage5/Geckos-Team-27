import React from "react";
import { NavLink } from "react-router-dom";

import "./UsersNav.css";

const DashboardNav = props => (
  <div className="DashboardNav">
    <NavLink
      className="Dashboard-Link"
      activeClassName="DashLinkActive"
      to={"/dashboard/edit/" + props.userId}
    >
      Edit Profile
    </NavLink>
    <NavLink
      className="Dashboard-Link"
      activeClassName="DashLinkActive"
      to={"/dashboard/photos/" + props.userId}
    >
      Photos
    </NavLink>
    <NavLink
      className="Dashboard-Link Show-Link"
      to={"/dashboard/show/" + props.userId}
    >
      Show Profile
    </NavLink>
  </div>
);

export default DashboardNav;
