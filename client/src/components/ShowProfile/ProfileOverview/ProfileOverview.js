import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DivWithTitle from "../../UI/DivWithTitle/DivWithTitle";
import "./ProfileOverview.css";

const ProfileOverview = ({ user, homes }) => {
  const { verified } = user;
  let verifiedList = null;
  if (verified !== undefined) {
    if (
      verified.id ||
      verified.info ||
      verified.email ||
      verified.phone ||
      verified.workemail
    ) {
      verifiedList = isVerified(user);
    }
  }
  return (
    <Fragment>
      {verifiedList}
      {user.school ||
        user.work ||
        (user.languages !== undefined && (
          <DivWithTitle title="About Me" classes="Verification">
            {user.school && makeAboutMe("Schools", user.school)}
            {user.work && makeAboutMe("Work", user.work)}
            {user.languages && makeAboutMe("Languages", user.languages)}
          </DivWithTitle>
        ))}
      {user.homes.map(key => {
        let image = homes.homes[key].images[0].split(",")[0];
        let city = homes.homes[key].location.city;
        let title = homes.homes[key].information.title;
        return (
          <div key={key} className="Profile-Homes-Listing">
            <Link to={`/homes/${key}`} className="Profile-Homes-Listing--link">
              <img src={image} alt={title} />
              <h4>
                <div>{title}</div>
                <div>{city}</div>
              </h4>
            </Link>
          </div>
        );
      })}
    </Fragment>
  );
};

function isVerified(profile) {
  let verifiedList = [];
  const infoTitles = {
    id: "Government ID",
    info: "Personal info",
    email: "Email address",
    phone: "Phone Number",
    workemail: "Work Email"
  };
  for (let verified in profile.verified) {
    if (profile.verified[verified]) {
      verifiedList.push(
        <li key={profile.id.toString() + verified}>
          <div className="Verified-User-body-info">
            <span>{infoTitles[verified]}</span>
            <svg
              className="Verified-User-body-info--check"
              viewBox="0 0 22.67 22.67"
            >
              <circle
                cx="12.5"
                cy="12.17"
                r="10.83"
                transform="translate(-4.87 4.88) rotate(-22.5)"
              />
              <polyline points="6.46 11.33 9.46 14.17 16.21 8.04" />
            </svg>
          </div>
        </li>
      );
    }
  }
  return (
    <DivWithTitle
      title="Verified info"
      classes="Verification"
      childClass="Verified-User-body"
    >
      <ul className="Verified-User-body-list">{verifiedList}</ul>
      <a className="Verified-User-body--learnmore unallow-link">Learn more »</a>
    </DivWithTitle>
  );
}

function makeAboutMe(title, info) {
  if (Array.isArray(info)) {
    info = info.join(", ");
  }
  return (
    <div key={title} className="About-Me-container">
      <span className="About-Me-title">{title}</span>
      <br />
      <span>{info}</span>
    </div>
  );
}

ProfileOverview.propTypes = {
  homes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  homes: state.homes
});

export default connect(
  mapStateToProps,
  null
)(ProfileOverview);
