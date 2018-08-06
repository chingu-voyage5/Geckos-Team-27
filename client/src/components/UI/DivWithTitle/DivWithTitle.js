import React from "react";
import PropTypes from "prop-types";
import "./DivWithTitle.css";

const divWithTitle = ({ classes, title, childClass, children }) => (
  <div className={"DivWithTitle " + classes}>
    <div id="DivWithTitle-Title">{title}</div>
    <div className={`DivWithTitle-Body ${childClass}`}>{children}</div>
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
