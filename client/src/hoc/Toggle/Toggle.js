import React, { Component } from "react";

class Toggle extends Component {
  state = {
    on: false
  };
  toggle = () => {
    this.setState(({ on }) => ({ on: !on }));
  };
  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      toggle: this.toggle
    };
  };
  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

export default Toggle;
