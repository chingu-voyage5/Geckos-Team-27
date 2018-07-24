import React from "react";
import InputRange from "react-input-range";

import "./Price.css";
import "./sliderClasses.css";

import FilterControls from "../FilterControls/FilterControls";

const price = props => {
  return (
    <div className="Dropdown-Menu Filters-Dropdown Price">
      <p>
        ${props.filters.min} - ${props.filters.max >= 1000
          ? "1000+"
          : props.filters.max}
        <small>The average nightly price is $82</small>
      </p>
      <InputRange
        maxValue={500}
        minValue={9}
        formatLabel={() => null}
        value={props.filters}
        onChange={props.rangeController}
      />
      <FilterControls
        apply={props.apply}
        toggle={props.toggle}
        reset={props.reset}
      />
    </div>
  );
};

export default price;
