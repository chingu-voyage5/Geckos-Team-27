import React from "react";

import "./MarkerSummary.css";
import "../../Listing/Listing.css";

const markerSummary = props => (
  <a href={`/homes/${props.home._id}`}>
    <img src={props.home.images[0].split(",")[0]} alt="house" />
    <div className="MarkerSummary-Content">
      <small>
        {props.home.information.boundary.toUpperCase()} •{" "}
        {props.home.information.bedrooms}{" "}
        {props.home.information.bedrooms === 1 ? "BEDROOM" : "BEDROOMS"}
      </small>
      <h3>{props.home.information.title}</h3>
      <h4>${props.home.information.price.weekday} per night</h4>
    </div>
  </a>
);

export default markerSummary;
