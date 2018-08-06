import React from "react";
import PropTypes from "prop-types";
import "./DivWithTitle.css";

const divWithTitle = props => (
  <div className={"DivWithTitle " + props.classes}>
    <div id="DivWithTitle-Title">{props.title}</div>
    <div className={`DivWithTitle-Body ${props.childClass}`}>
      {props.children}
    </div>
  </div>
);

divWithTitle.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string.isRequired,
  childClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default divWithTitle;
