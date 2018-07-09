import React from "react";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";

const styles = {
  closeButton: {
    right: "unset"
  }
};

const modal = ({ open, onClose, children }) => (
  <Modal open={open} onClose={onClose} styles={styles}>
    {children}
  </Modal>
);

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default modal;
