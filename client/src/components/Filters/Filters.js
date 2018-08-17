import React, { Fragment } from "react";
import Toggle from "../../hoc/Toggle/Toggle";

import "./Filters.css";

import Guests from "./Guests/Guests";
import HomeType from "./HomeType/HomeType";
import Price from "./Price/Price";
import Dates from "./Dates/Dates";
import "./ToggleSwitch.css";

const filters = props => {
  return (
    <div className="Filters">
      <Toggle>
        {({ on, toggle, backdrop }) => (
          <Fragment>
            <button
              onClick={toggle}
              className={
                on
                  ? "Filters-Category-Button GreenBackground"
                  : "Filters-Category-Button"
              }
            >
              Dates
            </button>
            {on && backdrop()}
            {on && (
              <Dates toggle={toggle} apply={props.apply} reset={props.reset} />
            )}
          </Fragment>
        )}
      </Toggle>
      <Toggle>
        {({ on, toggle, backdrop }) => (
          <Fragment>
            <button
              onClick={toggle}
              className={
                on ||
                Object.values(props.filters.guests).reduce((a, b) => a + b) > 1
                  ? "Filters-Category-Button GreenBackground"
                  : "Filters-Category-Button"
              }
            >
              {Object.values(props.filters.guests).reduce((a, b) => a + b) ||
                ""}{" "}
              Guests
            </button>
            {on && backdrop()}
            {on && (
              <Guests
                filters={props.filters.guests}
                clicked={props.guestController}
                apply={props.apply}
                reset={props.reset}
                toggle={toggle}
              />
            )}
          </Fragment>
        )}
      </Toggle>
      <Toggle>
        {({ on, toggle, backdrop }) => (
          <Fragment>
            <button
              onClick={toggle}
              className={
                on
                  ? "Filters-Category-Button GreenBackground"
                  : "Filters-Category-Button"
              }
            >
              Home type
            </button>
            {on && backdrop()}
            {on && (
              <HomeType
                filters={props.filters.homeType}
                clicked={props.homeTypeToggler}
                apply={props.apply}
                reset={props.reset}
                toggle={toggle}
              />
            )}
          </Fragment>
        )}
      </Toggle>
      <Toggle>
        {({ on, toggle, backdrop }) => (
          <Fragment>
            <button
              onClick={toggle}
              className={
                on
                  ? "Filters-Category-Button GreenBackground"
                  : "Filters-Category-Button"
              }
            >
              Price
            </button>
            {on && backdrop()}
            {on && (
              <Price
                filters={props.filters.price}
                rangeController={props.rangeController}
                apply={props.apply}
                reset={props.reset}
                toggle={toggle}
              />
            )}
          </Fragment>
        )}
      </Toggle>
    </div>
  );
};

export default filters;
