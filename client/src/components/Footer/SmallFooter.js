import React, { Fragment } from "react";

const SmallFooter = ({ className }) => (
  <Fragment>
    <footer className={className}>
      {/* later: replace "Logo"
        with GeckoBnB's svg/icon in a span or div
      */}
      <div className="sm-ft-brand">Logo © GeckoBnB, Inc.</div>
      <div className="sm-ft-lang-currency">
        <div>
          <div className="sm-ft-text">English</div>
          <div className="sm-ft-angle-icon">
            <i className="fas fa-angle-down" />
          </div>
        </div>
        <div>
          <div className="sm-ft-text">USD</div>
          <div className="sm-ft-angle-icon">
            <i className="fas fa-angle-down" />
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default SmallFooter;
