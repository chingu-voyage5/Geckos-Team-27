import React from "react";

import "./Input.css";

const input = ({
  divClasses,
  inputClasses,
  type,
  placeholder,
  name,
  children
}) => (
  <div className={"Input-Container " + (divClasses ? divClasses : null)}>
    <input
      className={inputClasses || null}
      type={type || "text"}
      placeholder={placeholder || null}
      name={name}
    />
    {children}
  </div>
);

export default input;
