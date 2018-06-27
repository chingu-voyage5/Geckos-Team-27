import React, { Component } from "react";

class Toggle extends Component {
  state = {
    on: false
  };
  toggle = () => {
    this.setState(({ on }) => ({ on: !on }));
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
      backdrop: this.backdrop
    };
  };
  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

export default Toggle;
