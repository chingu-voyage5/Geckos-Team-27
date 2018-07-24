import React from "react";

import "./FilterControls.css";

const filterControls = props => (
  <div className="Filters-Controls">
    <a onClick={props.reset}>
      <small onClick={props.toggle} className="GrayText SemiboldText">
        Clear
      </small>
    </a>
    <a onClick={props.apply}>
      <small onClick={props.toggle} className="GreenText SemiboldText">
        Apply
      </small>
    </a>
  </div>
);

export default filterControls;
