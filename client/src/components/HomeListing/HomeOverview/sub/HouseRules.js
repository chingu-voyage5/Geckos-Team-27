import React from "react";
import PropTypes from "prop-types";

const HouseRules = ({ home }) => (
  <div>
    <div>
      {home.information.rules.smoking ? "Smoking allowed" : "No Smoking"}
    </div>
    <div>
      {home.information.rules.pets ? "Pets allowed" : "Not suitable for pets"}
    </div>
    <div>
      {home.information.rules.parties ? "Parties allowed" : "No parties"}
    </div>
    <div>{`Check-in is anytime after ${home.information.rules.checkin}`}</div>
    <div>{`Check-out by ${home.information.rules.checkout}`}</div>
    <div>
      {home.information.rules.selfcheckin
        ? "Self check-in with lockbox"
        : "No self check-in"}
    </div>
    {home.information.rules.comments && (
      <div>
        <div className="small-divide" />
        {home.information.rules.comments}
      </div>
    )}
  </div>
);

HouseRules.propTypes = {
  home: PropTypes.object.isRequired
};

export default HouseRules;
