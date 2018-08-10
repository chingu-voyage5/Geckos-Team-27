import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import VerifiedIcon from "../../UI/Verified-icon/VerifiedIcon";
import "./HostDisplay.css";

const HostDisplay = ({ user }) => (
  <div className="Host-Display flex-column">
    <div className="Host-Display-header">
      <div className="Host-Display-headline flex-column">
        <div className="Host-Display-title">Hosted By {user.firstName}</div>
        <div className="Host-Display-joindate">
          {`${user.city}, ${user.state} `}
          - Joined July 2018
        </div>
        <div className="Host-Display-iconbar">
          <div className="icon-set">
            <button className="btn-yellow">
              {user.reviews.length.toString()}
            </button>
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
      </div>
      <Link to={`/users/${user.id}`} className="Host-Display-avatar-wrapper">
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      </Link>
    </div>
    <div className="Host-Display-intro">{user.intro}</div>
    <Link to={`/users/${user.id}`}>
      <button className="accent-outline">Contact Host</button>
    </Link>
    <ul>
      <li>
        Languages: <span>{user.languages}</span>
      </li>
      <li>
        Response Rate: <span>100%</span>
      </li>
      <li>
        Response Time: <span>1 hour</span>
      </li>
    </ul>
  </div>
);

HostDisplay.propTypes = {
  user: PropTypes.object.isRequired
};

export default HostDisplay;