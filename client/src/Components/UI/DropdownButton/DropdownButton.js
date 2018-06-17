import React, { Component } from "react";
import "./DropdownButton.css";
import Backdrop from "../Backdrop/Backdrop";

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
    // pass props to this.props.children
    const Children = this.props.children
      ? React.cloneElement(this.props.children, {
          close: this.closeDropdown
        })
      : null;
    return (
      <div className="Dropdown">
        <button className="NavButton" onClick={this.toggle}>
          {this.props.title}
        </button>
        <Backdrop
          clicked={this.closeDropdown}
          visible={this.state.dropDownOpen}
        />
        <div
          className={
            this.state.dropDownOpen
              ? "Dropdown-Menu " +
                ("Dropdown-Open " + this.props.activeMenuClasses + " " || "") +
                (this.props.menuClasses || "")
              : "Dropdown-Menu " + (this.props.menuClasses || "")
          }
        >
          {Children}
        </div>
      </div>
    );
  }
}
export default DropdownButton;
