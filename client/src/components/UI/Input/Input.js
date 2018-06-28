import React from "react";

import "./Input.css";

const input = props => (
  <div
    className={
      "Input-Container " + (props.divClasses ? props.divClasses : null)
    }
  >
    <input
      className={props.inputClasses || null}
      type={props.type || "text"}
      placeholder={props.placeholder || null}
      name={props.name}
    />
    {props.children}
  </div>
);

export default input;
