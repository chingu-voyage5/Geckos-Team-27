import React from "react";
import "./DivWithTitle.css";

const divWithTitle = props => (
  <div className={"DivWithTitle " + props.classes}>
    <div id="DivWithTitle-Title">{props.title}</div>
    <div className={`DivWithTitle-Body ${props.childClass}`}>
      {props.children}
    </div>
  </div>
);

export default divWithTitle;
