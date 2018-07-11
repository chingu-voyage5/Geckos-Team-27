import React from "react";

import Select from "../Select/Select";

import "./SelectWithLabel.css";

const selectWithLabel = props => (
  <div className="SelectWithLabel">
    <Select
      name={props.name}
      value={props.value}
      type={props.type}
      initial={props.initial}
    >
      <small>{props.message}</small>
    </Select>
    <label htmlFor={props.name}>{props.label}</label>
  </div>
);

export default selectWithLabel;
