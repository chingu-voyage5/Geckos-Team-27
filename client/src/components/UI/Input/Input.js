import React from "react";
import PropTypes from "prop-types";
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

input.propTypes = {
  divClasses: PropTypes.string,
  inputClasses: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default input;
