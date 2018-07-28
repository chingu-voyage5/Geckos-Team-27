import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Review.css";

const Review = ({ review }) => (
  <div className="indreview">
    <div className="review-header">
      <Link to={`/users/${review.reviewerId}`}>
        <img
          src={review.image}
          alt={`${review.firstName} ${review.lastName}`}
        />
      </Link>
      <span>
        <div>{review.firstName}</div>
        <div>August 2018</div>
      </span>
    </div>
    <div className="review-content">{review.content}</div>
    <hr />
  </div>
);

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
