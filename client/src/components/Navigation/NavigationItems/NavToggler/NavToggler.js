import React, { Fragment } from "react";
import "./NavToggler.css";
import Toggle from "../../../../hoc/Toggle/Toggle";

const NavToggler = () => (
  <Fragment>
    <Toggle>
      {({ on, toggle, backdrop }) => (
        <Fragment>
          {on && backdrop("TogglerBackdrop")}
          <button
            className={
              on ? "NavButton NavToggler Open" : "NavButton NavToggler"
            }
            onClick={toggle}
          >
            <i className="fas fa-bars" />
          </button>
        </Fragment>
      )}
    </Toggle>
  </Fragment>
);

export default NavToggler;
