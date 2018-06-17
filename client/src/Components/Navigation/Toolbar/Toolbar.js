//libraries etc imports
import React from "react";
import { withRouter } from "react-router-dom";

//component imports
import DropdownButton from "../../UI/DropdownButton/DropdownButton";
import HostDropdownMenu from "../NavigationItems/HostDropdownMenu/HostDropdownMenu";
import Search from "../NavigationItems/Search/Search";
import HelpSideDrawer from "../NavigationItems/HelpSideDrawer/HelpSideDrawer";
import NavToggler from "../NavigationItems/NavToggler/NavToggler";

//styles imports
import "./Toolbar.css";

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
      <NavToggler />
      <div className="NavButtons">
        <DropdownButton
          title="Become a host"
          keepDefaultClasses
          menuClasses="HostDropdown"
          activeMenuClasses="center"
        >
          <HostDropdownMenu />
        </DropdownButton>
        <DropdownButton
          title="Help"
          menuClasses="HelpSideDrawer"
          keepDefaultClasses
          activeMenuClasses="HelpSideDrawer-Open"
        >
          <HelpSideDrawer />
        </DropdownButton>
        <button className="NavButton">Log in</button>
        <button className="NavButton">Signup</button>
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
