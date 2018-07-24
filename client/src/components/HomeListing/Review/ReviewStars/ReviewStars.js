import React, { Fragment } from "react";
import ReactStars from "react-stars";
import "./ReviewStars.css";

const starColor = "#227b7f"; //dark cyan

const ReviewStars = ({ reviewAvg, reviews }) => (
  <Fragment>
    <div className="Review-Header">
      <h2>{reviews.length !== 0 ? reviews.length : 0} Reviews</h2>
      <span>
        <ReactStars
          count={5}
          value={reviewAvg.avg}
          color1={"lightgrey"}
          color2={starColor}
          half={true}
          edit={false}
          size={38}
        />
      </span>
    </div>
    <hr />
    <div className="Review-Table">
      <div className="Review-Table-Group">
        <div className="flex-row Review-Table-item">
          <h4>Accuracy</h4>
          <ReactStars
            count={5}
            value={reviewAvg.accuracy}
            color1={"lightgrey"}
            color2={starColor}
            half={true}
            edit={false}
            size={24}
          />
        </div>
        <div className="flex-row Review-Table-item">
          <h4>Communication</h4>
          <ReactStars
            count={5}
            value={reviewAvg.communication}
            color1={"lightgrey"}
            color2={starColor}
            half={true}
            edit={false}
            size={24}
          />
        </div>
        <div className="flex-row Review-Table-item">
          <h4>Cleanliness</h4>
          <ReactStars
            count={5}
            value={reviewAvg.cleanliness}
            color1={"lightgrey"}
            color2={starColor}
            half={true}
            edit={false}
            size={24}
          />
        </div>
      </div>
      <div className="Review-Table-Group">
        <div className="flex-row Review-Table-item">
          <h4>Location</h4>
          <ReactStars
            count={5}
            value={reviewAvg.location}
            color1={"lightgrey"}
            color2={starColor}
            half={true}
            edit={false}
            size={24}
          />
        </div>
        <div className="flex-row Review-Table-item">
          <h4>Check-in</h4>
          <ReactStars
            count={5}
            value={reviewAvg.checkin}
            color1={"lightgrey"}
            color2={starColor}
            half={true}
            edit={false}
            size={24}
          />
        </div>
        <div className="flex-row Review-Table-item">
          <h4>Value</h4>
          <ReactStars
            count={5}
            value={reviewAvg.value}
            color1={"lightgrey"}
            color2={starColor}
            half={true}
            edit={false}
            size={24}
          />
        </div>
      </div>
    </div>
  </Fragment>
);

export default ReviewStars;
