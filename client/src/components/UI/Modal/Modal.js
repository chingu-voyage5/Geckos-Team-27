import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ children, classNames, open }) => {
  const modalClasses = "Modal" + (classNames ? ` ${classNames}` : "");
  return (
    <div className={open ? `${modalClasses} Open` : `${modalClasses}`}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  classNames: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Modal;
