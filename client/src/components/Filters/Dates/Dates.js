import React from "react";

import "./Dates.css";
import DateRangePicker from "react-daterange-picker";
import FilterControls from "../FilterControls/FilterControls";

class price extends React.Component {
  state = {
    dates: null
  };
  onSelect = dates => this.setState({ dates });

  render() {
    console.log(this.props.toggle);
    return (
      <div className="Dropdown-Menu Filters-Dropdown Dates">
        <DateRangePicker
          onSelect={this.onSelect}
          value={this.state.dates}
          minimumDate={Date.now()}
          numberOfCalendars={2}
        />
        <FilterControls
          apply={this.props.apply}
          toggle={this.props.toggle}
          reset={this.props.reset}
        />
      </div>
    );
  }
}

export default price;
