import React from "react";
import "./HostDropdownMenu.css";

const hostDropdownMenu = props => (
  <div
    className={
      props.open
        ? "Toggleable-Menu HostToggle Open"
        : "Toggleable-Menu HostToggle"
    }
  >
    <a href="/">
      Host a home
      <p>
        <small>Earn up to $345 a week hosting</small>
      </p>
    </a>
    <a href="/">No time to host?</a>
    <a href="/">Host an experience</a>
  </div>
);

export default hostDropdownMenu;
