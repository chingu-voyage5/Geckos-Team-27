import React, { Component, Fragment } from "react";
import "./NavToggler.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";

//button that toggles an adjacent element instead of a child component

class NavToggler extends Component {
  state = {
    dropDownOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      dropDownOpen: !prevState.dropDownOpen
    }));
  };

  closeDropdown = () => {
    this.setState({
      dropDownOpen: false
    });
  };

  render() {
    return (
      <Fragment>
        <Backdrop
          clicked={this.closeDropdown}
          visible={this.state.dropDownOpen}
          classes="TogglerBackdrop"
        />
        <button
          className={
            this.state.dropDownOpen
              ? "NavButton NavToggler Open"
              : "NavButton NavToggler"
          }
          onClick={this.toggle}
        >
          <i class="fas fa-bars" />
        </button>
      </Fragment>
    );
  }
}
export default NavToggler;
