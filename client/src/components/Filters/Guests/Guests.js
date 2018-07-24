import React from "react";

import "./Guests.css";

import FilterControls from "../FilterControls/FilterControls";

const guests = props => (
  <div className="Dropdown-Menu Filters-Dropdown">
    <div className="Guests">
      <div>Adults </div>
      <div className="Guests-Controls">
        <button
          onClick={() => props.clicked("dec", "adults")}
          className="Filters-Round-Button"
          disabled={props.filters.adults === 1}
        >
          -
        </button>
        <span>{props.filters.adults}</span>
        <button
          onClick={() => props.clicked("inc", "adults")}
          className="Filters-Round-Button"
        >
          +
        </button>
      </div>
    </div>
    <div className="Guests">
      <div>
        Children <small className="message">Ages 2-12</small>
      </div>
      <div className="Guests-Controls">
        <button
          onClick={() => props.clicked("dec", "children")}
          className="Filters-Round-Button"
          disabled={!props.filters.children}
        >
          -
        </button>
        <span>{props.filters.children}</span>
        <button
          onClick={() => props.clicked("inc", "children")}
          className="Filters-Round-Button"
        >
          +
        </button>
      </div>
    </div>
    <div className="Guests">
      <div>Infants </div>
      <div className="Guests-Controls">
        <button
          onClick={() => props.clicked("dec", "infants")}
          className="Filters-Round-Button"
          disabled={!props.filters.infants}
        >
          -
        </button>
        <span>{props.filters.infants}</span>
        <button
          onClick={() => props.clicked("inc", "infants")}
          className="Filters-Round-Button"
        >
          +
        </button>
      </div>
    </div>
    <FilterControls
      apply={props.apply}
      toggle={props.toggle}
      reset={props.reset}
    />
  </div>
);

export default guests;
