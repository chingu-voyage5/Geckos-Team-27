import React, { Component, Fragment } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer/Footer";

class Layout extends Component {
  state = {
    toolbarOpen: false,
    hostDropdownOpen: false,
    helpSideBarOpen: false,
    loginModalOpen: false,
    registerModalOpen: false
  };

  toggleHandler = element => {
    this.setState(prevState => {
      const newState = { ...prevState };
      newState[element] = !prevState[element];
      return newState;
    });
  };

  closeHandler = element => {
    this.setState(prevState => {
      const newState = { ...prevState };
      newState[element] = false;
      return newState;
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar
          states={this.state}
          toggle={this.toggleHandler}
          close={this.closeHandler}
        />
        <main>{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
