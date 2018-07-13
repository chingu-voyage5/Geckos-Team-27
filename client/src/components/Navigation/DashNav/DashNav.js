import React from "react";
import { NavLink } from "react-router-dom";

import "./DashNav.css";

const DashNav = props => (
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

export default DashNav;
