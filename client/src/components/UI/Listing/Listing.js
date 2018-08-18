import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { isEmpty } from "../../../utils";
import "./Listing.css";

class Listing extends Component {
  static propTypes = {
    listingData: PropTypes.object.isRequired
  };
  sourceImg = imageArrStr => {
    const images = imageArrStr[0].split(",");
    return images[0];
  };
  render() {
    const { listingData } = this.props;
    return (
      <div className="listing">
        <div
          className="listing-wrapper"
          onMouseOver={this.props.mouseIn || null}
          onMouseOut={this.props.mouseOut || null}
        >
          <div className="listing-img-wrap">
            <Link to={`/homes/${listingData._id}`} className="listing-link">
              <img
                src={
                  !isEmpty(listingData.images)
                    ? this.sourceImg(listingData.images) //images is an array
                    : "http://via.placeholder.com/250x250"
                }
                className="listing-img"
                alt="listing description"
              />
            </Link>
          </div>
          <Link to={`/homes/${listingData._id}`} className="listing-link">
            <div className="listing-text">
              <div className="listing-text-overview">
                {listingData.information.boundary.toUpperCase()} •{" "}
                {listingData.information.bedrooms}{" "}
                {listingData.information.bedrooms > 1 ? "BEDS" : "BED"}
              </div>
              <div className="listing-text-title">
                {listingData.information.title}
              </div>
              <div className="listing-text-rate">
                ${listingData.information.price.weekday} per night
              </div>
              <div className="listing-text-reviews">
                <ReactStars
                  count={5}
                  value={listingData.reviewAvg.avg}
                  color1={"lightgrey"}
                  color2={"green"}
                  half={true}
                  edit={false}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Listing;
