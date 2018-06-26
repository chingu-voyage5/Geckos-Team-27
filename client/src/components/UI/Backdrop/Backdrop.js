import React from "react";
import "./Backdrop.css";

const backdrop = props =>
  props.visible ? (
    <div
      onClick={props.clicked}
      className={props.classes ? `Backdrop ${props.classes}` : "Backdrop"}
    />
  ) : null;

export default backdrop;
