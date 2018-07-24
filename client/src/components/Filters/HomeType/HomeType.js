import React from "react";

import "./HomeType.css";
import FilterControls from "../FilterControls/FilterControls";

const homeType = props => {
  console.log(props.entirePlace);
  return (
    <div className="Dropdown-Menu Filters-Dropdown HomeTypes">
      <label>
        <input
          type="checkbox"
          defaultChecked={props.filters.entirePlace}
          onChange={() => props.clicked("entirePlace")}
        />
        <div className="HomeTypes-Label">
          <p>Entire place</p>
          <small>Have a place to yourself</small>
        </div>
      </label>
      <label>
        <input
          type="checkbox"
          defaultChecked={props.filters.privateRoom}
          onChange={() => props.clicked("privateRoom")}
        />
        <div className="HomeTypes-Label">
          <p>Private room</p>
          <small>Have your own room and share some common spaces</small>
        </div>
      </label>
      <label>
        <input
          type="checkbox"
          defaultChecked={props.filters.sharedRoom}
          onChange={() => props.clicked("sharedRoom")}
        />
        <div className="HomeTypes-Label">
          <p>Shared room</p>
          <small>Stay in a shared space, like a common room</small>
        </div>
      </label>
      <FilterControls
        apply={props.apply}
        toggle={props.toggle}
        reset={props.reset}
      />
    </div>
  );
};

export default homeType;
