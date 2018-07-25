import React from "react";

import "./FilterControls.css";

const filterControls = props => {
  const apply = () => {
    props.toggle();
    props.apply();
  };
  const reset = () => {
    props.toggle();
    props.reset();
  };
  return (
    <div className="Filters-Controls">
      <a onClick={reset}>
        <small className="GrayText SemiboldText">Clear</small>
      </a>
      <a onClick={apply}>
        <small className="GreenText SemiboldText">Apply</small>
      </a>
    </div>
  );
};

export default filterControls;
