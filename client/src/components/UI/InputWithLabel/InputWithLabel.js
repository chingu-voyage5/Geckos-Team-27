import React from "react";

import Input from "../Input/Input";

import "./InputWithLabel.css";

const inputWithLabel = props => (
  <div className="InputWithLabel">
    <label htmlFor={props.name}>{props.label}</label>
    <Input
      name={props.name}
      type={props.type}
      value={props.value}
      message={props.message}
      placeholder={props.placeholder}
    />
  </div>
);

export default inputWithLabel;
