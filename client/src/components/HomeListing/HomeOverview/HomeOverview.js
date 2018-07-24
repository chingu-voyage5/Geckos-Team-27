import React from "react";
import PropTypes from "prop-types";
import Header from "./sub/Header";
import Body from "./sub/Body";
import Amenities from "./sub/Amenities";
import Pricing from "./sub/Pricing";
import Sleeping from "./sub/Sleeping";
import HouseRules from "./sub/HouseRules";
import SafetyFeatures from "./sub/SafetyFeatures";
import "./HomeOverview.css";

const HomeOverview = ({ home }) => (
  <div className="Home-Overview">
    <div className="Home-Overview-Header">
      <Header home={home} />
    </div>
    <div className="Home-Overview-Body">
      <Body home={home} />
    </div>
    <div className="divide" />
    <Amenities
      amenities={home.information.amenities}
      familyAmenities={home.information.familyamenities}
    />
    <div className="divide" />
    <h4>Pricing</h4>
    <Pricing home={home} />
    <div className="divide" />
    <h4>Sleeping arrangements</h4>
    <div className="Home-Overview-Sleeping">
      <Sleeping home={home} />
    </div>
    <div className="divide" />
    <h4>House Rules</h4>
    <HouseRules home={home} />
    <div className="divide" />
    <h4>Cancellations</h4>
    <div>
      <div>{home.information.cancellation}</div>
    </div>
    <div className="divide" />
    <h4>Safety Features</h4>
    <SafetyFeatures home={home} />
    <div className="divide" />
    <h4>Availability</h4>
    <div>
      <span className="bold-text">
        {home.information.minimumstay +
          (home.information.minimumstay === 1 ? " night" : " nights ")}
      </span>
      <span> minimum stay</span>
    </div>
  </div>
);

HomeOverview.propTypes = {
  home: PropTypes.object.isRequired
};

export default HomeOverview;
