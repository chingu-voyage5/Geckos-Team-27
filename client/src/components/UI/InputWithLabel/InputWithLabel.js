import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import "./InputWithLabel.css";

const inputWithLabel = ({
  name,
  label,
  type,
  value,
  message,
  placeholder,
  onChange
}) => (
  <div className="InputWithLabel">
    <label htmlFor={name}>{label}</label>
    <Input
      name={name}
      type={type}
      value={value}
      message={message}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

inputWithLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default inputWithLabel;
