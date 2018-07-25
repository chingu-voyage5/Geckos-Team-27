import React from "react";
import ReactStars from "react-stars";
import ButtonIconText from "../../UI/ButtonIconText/ButtonIconText";
import "./Booking.css";

const Booking = ({ home }) => (
  <div className="Booking-Container">
    <div className="Booking-Content">
      <div className="Booking-Header">
        <h2>
          $ {home.information.price.weekday}
          <span>per night</span>
        </h2>
        <div className="flex-row Booking-Reviews">
          <div>
            <ReactStars
              count={5}
              value={home.reviewAvg.avg}
              color1={"lightgrey"}
              color2={"green"}
              half={true}
              edit={false}
              size={14}
            />
          </div>
          <span>{home.reviews.length || 0}</span>
        </div>
      </div>
      <div className="Booking-Input">
        <div className="Booking-Input-Date-Guests">
          <div className="Booking-Calendar">
            <p className="inputTitle">Dates</p>
            <p className="inputSection">
              <span>Check-In</span>
              <i className="fas fa-long-arrow-alt-right" />
              <span>Check Out</span>
            </p>
          </div>
          <div className="Booking-Guest">
            <p className="inputTitle">Guests</p>
            <p className="inputSection guestAmount">1 Guest</p>
          </div>
        </div>
        <div className="Booking-Request-wrapper">
          <ButtonIconText
            container="Book-Request-container"
            btnClass="book-request-btn unallow-link"
            text="Requst To Book"
            icon=""
            onClick={() => {}}
          />
          <small className="Booking-Request-footer">
            You wont be charged yet
          </small>
        </div>
      </div>
    </div>
  </div>
);

export default Booking;
