import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./SmallFooter.css";

const SmallFooter = ({ className }) => (
  <Fragment>
    <footer className={className}>
      {/* later: replace "Logo"
        with GeckoBnB's svg/icon in a span or div
      */}
      <div className="sm-ft-brand">Logo © GeckoBnB, Inc.</div>
      <div className="flex-row sm-ft-lang-currency">
        <div className="flex-row">
          <div className="sm-ft-text">English</div>
          <div className="sm-ft-angle-icon">
            <i className="fas fa-angle-down" />
          </div>
        </div>
        <div className="flex-row">
          <div className="sm-ft-text">USD</div>
          <div className="sm-ft-angle-icon">
            <i className="fas fa-angle-down" />
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
);

SmallFooter.propTypes = {
  className: PropTypes.string
};

export default SmallFooter;
