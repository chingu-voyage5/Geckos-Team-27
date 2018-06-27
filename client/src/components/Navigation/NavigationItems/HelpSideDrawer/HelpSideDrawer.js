import React from "react";
import "./HelpSideDrawer.css";

const helpSideDrawer = props => (
  <div
    className={
      props.open
        ? "Toggleable-Menu HelpSideDrawer Open"
        : "Toggleable-Menu HelpSideDrawer"
    }
  >
    <div className="HelpSideDrawer-Top">
      <h2>
        Geckosbnb Help <i className="fas fa-times" onClick={props.close} />
      </h2>

      <div className="HelpSideDrawer-Body">
        <input type="text" />

        <p>Suggested articles</p>
        <a className="unallow-link">
          <span>Getting started guide</span>
          <i className="fas fa-chevron-right" />
        </a>
        <a className="unallow-link">
          <span>How to submit a reservation request?</span>
          <i className="fas fa-chevron-right" />
        </a>
        <a className="unallow-link">
          <span>What am I charged for a reservation?</span>
          <i className="fas fa-chevron-right" />
        </a>
        <a className="unallow-link">
          <span>What is the Geckosbnb cancellation policy?</span>
          <i className="fas fa-chevron-right" />
        </a>
        <a className="unallow-link">
          <span>How do I contact a host before booking a reservation?</span>
          <i className="fas fa-chevron-right" />
        </a>
        <a className="unallow-link">
          <span>What methods of payment does Bearbnb accept?</span>
          <i className="fas fa-chevron-right" />
        </a>
      </div>
    </div>
    <div className="HelpSideDrawer-Footer">
      <a className="HelpCenterButton unallow-link">Visit the Help Center</a>
      <a className="FeedbackButton unallow-link">Give Feedback</a>
    </div>
  </div>
);

export default helpSideDrawer;
