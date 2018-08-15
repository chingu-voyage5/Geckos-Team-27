import React from "react";
import VerifiedIcon from "../Verified-icon/VerifiedIcon";
import "./HostIcon.css";

const HostIcon = ({ user }) => (
  <div className="Host-iconbar">
    <div className="icon-set">
      <button className="btn-yellow">{user.reviews.length.toString()}</button>
      <span className="icon-label">Reviews</span>
    </div>
    <div className="icon-set">
      <button className="btn-yellow">
        {user.references.length.toString()}
      </button>
      <span className="icon-label">References</span>
    </div>
    {user.verified.id && (
      <div className="icon-set">
        <VerifiedIcon />
        <span className="icon-label">Verified</span>
      </div>
    )}
  </div>
);

export default HostIcon;
