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
        <a href="/">
          <span>Getting started guide</span>
          <i className="fas fa-chevron-right" />
        </a>
        <a href="/">
          <span>How to submit a reservation request?</span>
          <i className="fas fa-chevron-right" />
        </a>
        <a href="/">
          <span>What am I charged for a reservation?</span>
          <i className="fas fa-chevron-right" />
        </a>
        <a href="/">
          <span>What is the Geckosbnb cancellation policy?</span>
          <i className="fas fa-chevron-right" />
        </a>
        <a href="/">
          <span>How do I contact a host before booking a reservation?</span>
          <i className="fas fa-chevron-right" />
        </a>
        <a href="/">
          <span>What methods of payment does Bearbnb accept?</span>
          <i className="fas fa-chevron-right" />
        </a>
      </div>
    </div>
    <div className="HelpSideDrawer-Footer">
      <a className="HelpCenterButton">Visit the Help Center</a>
      <a className="FeedbackButton">Give Feedback</a>
    </div>
  </div>
);

export default helpSideDrawer;
