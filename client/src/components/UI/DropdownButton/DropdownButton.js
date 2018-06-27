import React, { Component, Fragment } from "react";
import "./DropdownButton.css";
import Backdrop from "../Backdrop/Backdrop";

class DropdownButton extends Component {
  state = {
    dropDownOpen: false
  };

  toggleHandler = () => {
    this.setState(prevState => ({ dropDownOpen: !prevState.dropDownOpen }));
  };

  closeHandler = () => {
    this.setState(prevState => ({ dropDownOpen: false }));
  };

  render() {
    //this button takes menuClasses and buttonClasses as props if you need
    //custom styling
    const dropdownMenuClasses =
      "Dropdown-Menu" +
      (this.props.menuClasses ? ` ${this.props.menuClasses}` : "");
    const dropdownButtonClasses =
      "Dropdown-Button" +
      (this.props.buttonClasses
        ? ` ${this.props.buttonClasses}`
        : " NavButton");
    return (
      <Fragment>
        <Backdrop
          clicked={this.closeHandler}
          visible={this.state.dropDownOpen}
        />
        <div className="Dropdown">
          <button
            className={dropdownButtonClasses}
            onClick={this.toggleHandler}
          >
            {this.props.title}
          </button>
          <div
            className={
              this.state.dropDownOpen
                ? `${dropdownMenuClasses} Open`
                : "Dropdown-Menu"
            }
          >
            {this.props.children}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default DropdownButton;
