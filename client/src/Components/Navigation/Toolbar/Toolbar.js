import React from "react";
import { withRouter } from "react-router-dom";

import "./Toolbar.css";
import Search from "../NavigationItems/Search/Search";

const toolbar = props => {
  //pass if the user is authenticated as a prop
  let search = <Search />;
  if (props.location.pathname === "/") {
    search = null;
  }

  return (
    <nav className="Toolbar">
      <div>
        {/* Logo */}
        <a style={{ textDecoration: "none", color: "red" }} href="/">
          Logo
        </a>
        {/* Search bar */}
        {search}
      </div>
      <div className="NavButtons">
        {/* <HostButton /> */}
        {/* <HelpButton /> */}
        {/* if user is authenticated */}
        {/* <Logout /> */}
        {/* else */}
        {/* <Signup /> */}
        {/* <LogIn /> */}
      </div>
    </nav>
  );
};

export default withRouter(toolbar);
