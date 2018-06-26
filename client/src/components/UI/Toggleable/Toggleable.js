import React, { Fragment } from "react";

import "./Toggleable.css";
import Backdrop from "../Backdrop/Backdrop";

//this component is toggled by recieveing properties from the parent,
//if you need a component with the toggle state inside it,
//see the dropdown button

const toggleable = props => (
  <Fragment>
    <Backdrop clicked={props.close} visible={props.open} />
    {props.children}
  </Fragment>
);

export default toggleable;
