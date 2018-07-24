import React from "react";

import "./Listings.css";

import Loader from "../UI/Loader/Loader";
import Listing from "../UI/Listing/Listing";

const listings = props => {
  let listings = <Loader />;
  if (props.data !== null) {
    if (props.data.length === 0) {
      listings = <h1>No results</h1>;
    } else {
      listings = Object.values(props.data).map((listing, index) => (
        <Listing listingData={listing} key={`listing-${index}`} />
      ));
    }
  }
  return <div className="Listings">{listings}</div>;
};

export default listings;
