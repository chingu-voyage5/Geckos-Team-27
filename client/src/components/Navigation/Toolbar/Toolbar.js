import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { isEmpty } from "../../../utils";
import { logoutUserRequest } from "../../../redux/actions/index";
import HostDropdownMenu from "../NavigationItems/HostDropdownMenu/HostDropdownMenu";
import Search from "../Search/Search";
import HelpSideDrawer from "../NavigationItems/HelpSideDrawer/HelpSideDrawer";
import NavToggler from "../NavigationItems/NavToggler/NavToggler";
import Toggle from "../../../hoc/Toggle/Toggle";
import GuestLinks from "../GuestLinks/GuestLinks";
import "./Toolbar.css";

class Toolbar extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.auth.isAuthenticated === false &&
      this.props.auth.isAuthenticated === true
    ) {
      // user logged in so go to dashboard
      this.props.history.push("/dashboard");
    }
  }
  render() {
    const { location, history, auth, logoutUserRequest } = this.props;
    let search = <Search />;
    if (location.pathname === "/") {
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
          {/* not registered or logged in. */}
          {!auth.isAuthenticated &&
            isEmpty(auth.user) && <GuestLinks className="NavButton" />}
          {/* // user registered, only display login link */}
          {!isEmpty(auth.user) &&
            !auth.isAuthenticated && (
              <GuestLinks className="NavButton" signUp={false} />
            )}
          {/* user logged in. display logout & settings btn to '/dashboard' */}
          {auth.isAuthenticated && (
            <Fragment>
              <button
                onClick={() => history.push("/dashboard")}
                className="NavButton"
              >
                Settings
              </button>
              <button
                className="NavButton"
                onClick={() => {
                  history.push("/");
                  logoutUserRequest();
                }}
              >
                Logout
              </button>
            </Fragment>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUserRequest }
)(withRouter(Toolbar));
