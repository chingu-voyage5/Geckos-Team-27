import React from "react";
import PropTypes from "prop-types";
import "./HostDropdownMenu.css";

const hostDropdownMenu = ({ open }) => (
  <div
    className={
      open ? "Toggleable-Menu HostToggle Open" : "Toggleable-Menu HostToggle"
    }
  >
    <a className="unallow-link">
      Host a home
      <p>
        <small>Earn up to $345 a week hosting</small>
      </p>
    </a>
    <a className="unallow-link">No time to host?</a>
    <a className="unallow-link">Host an experience</a>
  </div>
);

hostDropdownMenu.propTypes = {
  open: PropTypes.bool.isRequired
};

export default hostDropdownMenu;
