import React, { Component } from "react";
import "./Toggle.css";

class Toggle extends Component {
  state = {
    on: false,
    swap: false,
    active: null
  };
  toggle = () => {
    this.setState(({ on }) => ({ on: !on }));
    if (this.state.swap === true) {
      this.setState(() => ({ swap: false }));
    }
  };
  toggleActive = activeStr => {
    if (activeStr === undefined || activeStr === "") {
      console.log("pass a string to change fn");
      return;
    }
    this.setState(() => ({ active: activeStr }));
  };
  toggleSwap = () => {
    this.setState(({ swap }) => ({ swap: !swap }));
  };
  backdrop = className => (
    <div
      onClick={this.toggle}
      className={className ? `Backdrop ${className}` : "Backdrop"}
    />
  );
  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      toggle: this.toggle,
      backdrop: this.backdrop,
      swap: this.state.swap,
      toggleSwap: this.toggleSwap,
      active: this.state.active,
      toggleActive: this.toggleActive
    };
  };
  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

export default Toggle;
