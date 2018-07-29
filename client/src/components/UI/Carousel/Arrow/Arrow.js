import React from "react";
import PropTypes from "prop-types";
import "./Arrow.css";

const left = <polyline points="11.11 0.72 1.46 9.91 11.18 19.06" />;
const right = <polyline points="0.75 0.72 10.41 9.91 0.69 19.06" />;

const Arrow = ({
  direction, // left || right
  onClick,
  className
}) => (
  <div className={`arrow arrow-${direction} ${className}`}>
    <span className="arrow-span">
      <button type="button" className={"arrow-button"} onClick={onClick}>
        <svg className={"arrow-svg"} viewBox="0 0 11.86 19.79">
          {direction === "left" ? left : right}
        </svg>
      </button>
    </span>
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Arrow;
