import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Listing.css";

class Listing extends Component {
  static propTypes = {
    listingData: PropTypes.object.isRequired
  };
  render() {
    const { listingData } = this.props;
    return (
      <div className="listing">
        <div className="listing-img-wrap">
          <Link to={`/${listingData.id}`} className="listing-link">
            <img
              src={listingData.image}
              className="listing-img"
              alt="listing description"
            />
          </Link>
        </div>
        <Link to={`/${listingData.id}`} className="listing-link">
          <div className="listing-text">
            <div className="listing-text-overview">
              {/* overview home info & bed count */}
              {listingData.overview.toUpperCase()} • {listingData.beds}{" "}
              {listingData.beds > 1 ? "BEDS" : "BED"}
            </div>
            <div className="listing-text-title">
              {/* overview home title */}
              {listingData.title}
            </div>
            <div className="listing-text-rate">
              {/* weekday price per night */}
              ${listingData.price} per night
            </div>
            {/* {reviews.length > 0 && (
                <div className="listing-text-reviews">
                    <ReviewStars />
                </div>
            )} */}
            {/* temporary: until <ReviewStars /> is made */}
            <div className="listing-text-reviews">
              {listingData.review} Stars / 5
            </div>
            {/* temporary: until <ReviewStars /> is made */}
          </div>
        </Link>
      </div>
    );
  }
}

export default Listing;
