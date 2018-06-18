import React, { Component } from "react";
import "./DropdownButton.css";
import Backdrop from "../Backdrop/Backdrop";

class DropdownButton extends Component {
  state = {
    dropDownOpen: false
  };

  toggle = () => {
    this.setState(prevState => {
      !prevState.dropDownOpen
        ? document
            .getElementsByClassName(this.props.divClass)[0]
            .classList.add("Open")
        : document
            .getElementsByClassName(this.props.divClass)[0]
            .className.remove("Open");
      return {
        dropDownOpen: !prevState.dropDownOpen
      };
    });
  };

  closeDropdown = () => {
    document
      .getElementsByClassName(this.props.divClass)[0]
      .classList.remove("Open");
    this.setState({
      dropDownOpen: false
    });
  };

  render() {
    return (
      <div className="Dropdown">
        <Backdrop
          clicked={this.closeDropdown}
          visible={this.state.dropDownOpen}
        />
        <button className="NavButton" onClick={this.toggle}>
          {this.props.title}
        </button>
      </div>
    );
  }
}
export default DropdownButton;
