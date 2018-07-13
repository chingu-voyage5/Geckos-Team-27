import React from "react";
import PropTypes from "prop-types";
import "./DashNav.css";

const DashNav = ({ active, onClick }) => (
  <div className="DashboardNav">
    <a
      className={
        active === "edit profile"
          ? "Dashboard-Link DashLinkActive"
          : "Dashboaard-Link"
      }
      onClick={() => onClick("edit profile")}
    >
      Edit Profile
    </a>
    <a
      className={
        active === "avatar"
          ? "Dashboard-Link DashLinkActive"
          : "Dashboaard-Link"
      }
      onClick={() => onClick("choose an avatar")}
    >
      Choose An Avatar
    </a>
    <a
      className="Dashboard-Link Show-Link"
      onClick={() => onClick("show profile")}
    >
      Show Profile
    </a>
  </div>
);

DashNav.propTypes = {
  active: PropTypes.oneOfType([null, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired
};

export default DashNav;
