import React from "react";
import PropTypes from "prop-types";
import "./IconText.css";

const IconText = ({ item, iconName, text }) => {
  return (
    <div className="icon-text">
      <span hidden={!item}>
        <i className={iconName} />
      </span>
      <span className={item ? "bold-icon-name" : "crossout-icon-name"}>
        {text}
      </span>
    </div>
  );
};

IconText.propTypes = {
  item: PropTypes.bool.isRequired,
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default IconText;
