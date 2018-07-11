import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const input = ({
  divClasses,
  inputClasses,
  type,
  placeholder,
  name,
  children,
  value,
  message,
  onChange
}) => {
  let input = (
    <input
      className={inputClasses || null}
      type={type || "text"}
      placeholder={placeholder || null}
      name={name}
      defaultValue={value || ""}
      onChange={onChange}
    />
  );
  if (type === "textarea") {
    input = (
      <textarea
        className={inputClasses || null}
        placeholder={placeholder || null}
        name={name}
        defaultValue={value || ""}
        cols="30"
        rows="5"
        onChange={onChange}
      />
    );
  }
  return (
    <div className={"Input-Container " + (divClasses ? divClasses : null)}>
      {input}
      <small>{message}</small>
      {children}
    </div>
  );
};

input.propTypes = {
  divClasses: PropTypes.string,
  inputClasses: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  message: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default input;
