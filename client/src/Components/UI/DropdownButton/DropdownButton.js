import React, { Component } from "react";
import "./DropdownButton.css";

class DropdownButton extends Component {
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
      <div className="DropdownButton">
        <button onBlur={this.closeDropdown} onClick={this.toggle}>
          {this.props.title}
        </button>
        <div
          className={
            this.state.dropDownOpen
              ? "Dropdown-Menu Dropdown-Open " + (this.props.menuClasses || "")
              : "Dropdown-Menu " + (this.props.menuClasses || "")
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default DropdownButton;
