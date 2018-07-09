//libraries etc imports
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
//component imports
import HostDropdownMenu from "../NavigationItems/HostDropdownMenu/HostDropdownMenu";
import Search from "../Search/Search";
import HelpSideDrawer from "../NavigationItems/HelpSideDrawer/HelpSideDrawer";
import NavToggler from "../NavigationItems/NavToggler/NavToggler";
import Toggle from "../../../hoc/Toggle/Toggle";
import Modal from "../../UI/Modal/Modal";
import LoginForm from "../../Auth/LoginForm";
import RegisterForm from "../../Auth/RegisterForm";

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
        <Toggle>
          {({ on, toggle, backdrop }) => (
            <Fragment>
              <button onClick={toggle} className="NavButton">
                Become a Host
              </button>
              {on && backdrop()}
              {on && <HostDropdownMenu open={true} />}
            </Fragment>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle, backdrop }) => (
            <Fragment>
              <button onClick={toggle} className="NavButton">
                Help
              </button>
              {on && backdrop()}
              {on && <HelpSideDrawer open={true} close={toggle} />}
            </Fragment>
          )}
        </Toggle>
        {/* if user is authenticated */}
        {/* <Logout /> */}
        {/* else */}
        {/* <Signup /> */}
        {/* <LogIn /> */}
        <Toggle>
          {({ on, toggle, backdrop }) => (
            <Fragment>
              <button onClick={toggle} className="NavButton">
                Sign Up
              </button>
              {on && backdrop("Modal-Backdrop Backdrop-Dark")}
              {on && (
                <Modal open={on} onClose={toggle}>
                  <RegisterForm />
                </Modal>
              )}
            </Fragment>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle, backdrop }) => (
            <Fragment>
              <button onClick={toggle} className="NavButton">
                Login
              </button>
              {on && backdrop("Modal-Backdrop Backdrop-Dark")}
              {on && (
                <Modal open={on} onClose={toggle}>
                  <LoginForm />
                </Modal>
              )}
            </Fragment>
          )}
        </Toggle>
      </div>
    </nav>
  );
};

export default withRouter(toolbar);
