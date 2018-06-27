//libraries etc imports
import React from "react";
import { withRouter } from "react-router-dom";

//component imports
import HostDropdownMenu from "../NavigationItems/HostDropdownMenu/HostDropdownMenu";
import Search from "../Search/Search";
import HelpSideDrawer from "../NavigationItems/HelpSideDrawer/HelpSideDrawer";
import NavToggler from "../NavigationItems/NavToggler/NavToggler";
import Toggleable from "../../UI/Toggleable/Toggleable";

//style imports
import "./Toolbar.css";

const toolbar = props => {
  //pass if the user is authenticated as a prop
  let search = <Search />;
  if (props.location.pathname === "/") {
    search = null;
  }

  return (
    <nav className="Toolbar">
      <div className="Toolbar-Left">
        {/* Logo */}
        <a style={{ textDecoration: "none", color: "red" }} href="/">
          Logo
        </a>
        {/* Search bar */}
        {search}
      </div>

      <NavToggler />
      <div className="NavButtons">
        <button
          onClick={() => props.toggle("hostDropdownOpen")}
          className="NavButton"
        >
          Become a host
        </button>
        <button
          onClick={() => props.toggle("helpSideBarOpen")}
          className="NavButton"
        >
          Help
        </button>
        {/* <button
          onClick={() => props.toggle("loginModalOpen")}
          className="NavButton"
        >
          Log in
        </button>
        <button
          onClick={() => props.toggle("registerModalOpen")}
          className="NavButton"
        >
          Signup
        </button> */}
        {/* if user is authenticated */}
        {/* <Logout /> */}
        {/* else */}
        {/* <Signup /> */}
        {/* <LogIn /> */}
      </div>

      <Toggleable
        open={props.states.hostDropdownOpen}
        close={() => props.close("hostDropdownOpen")}
      >
        <HostDropdownMenu
          open={props.states.hostDropdownOpen}
          close={() => props.close("hostDropdownOpen")}
        />
      </Toggleable>

      <Toggleable
        open={props.states.helpSideBarOpen}
        close={() => props.close("helpSideBarOpen")}
      >
        <HelpSideDrawer
          open={props.states.helpSideBarOpen}
          close={() => props.close("helpSideBarOpen")}
        />
      </Toggleable>

      {/* <Modal
        open={props.states.loginModalOpen}
        close={() => props.close("loginModalOpen")}
      >
        <h1>Login form</h1>
      </Modal>
      <Modal
        open={props.states.registerModalOpen}
        close={() => props.close("registerModalOpen")}
      >
        <h1>Register form</h1>
      </Modal> */}
    </nav>
  );
};

export default withRouter(toolbar);
