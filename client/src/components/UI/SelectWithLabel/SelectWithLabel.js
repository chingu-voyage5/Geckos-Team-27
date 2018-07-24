import React from "react";
import PropTypes from "prop-types";
import Select from "../Select/Select";
import "./SelectWithLabel.css";

const selectWithLabel = props => (
  <div className="SelectWithLabel">
    <Select
      name={props.name}
      value={props.value}
      type={props.type}
      initial={props.initial}
      onChange={props.onChange}
    >
      <small>{props.message}</small>
    </Select>
    <label htmlFor={props.name}>{props.label}</label>
  </div>
);

selectWithLabel.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string,
  initial: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  message: PropTypes.string,
  label: PropTypes.string
};

export default selectWithLabel;
