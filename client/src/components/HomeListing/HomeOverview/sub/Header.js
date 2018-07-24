import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Header = ({ home }) => (
  <Fragment>
    <span className="Home-Overview-Header left">
      <div className="Home-Overview-Title">
        <h1>{home.information.title}</h1>
      </div>
      <div className="Home-Overview-Subtitle">
        {home.information.boundary} · {home.location.city}
      </div>
      <div className="Home-Overview-Iconpreview">
        <i className="fas fa-users" />
        <span className="Home-Overview-Iconpreview-item">
          {home.information.guestLimit +
            (home.information.guestLimit === 1 ? " guest" : " guests")}
        </span>
        <i className="far fa-square" />
        <span className="Home-Overview-Iconpreview-item">
          {home.information.bedrooms +
            (home.information.bedrooms === 1 ? " bedroom" : " bedrooms")}
        </span>
        <i className="fas fa-bed" />
        <span className="Home-Overview-Iconpreview-item">
          {home.information.bedrooms + " bed"}
        </span>
        <i className="fas fa-bath" />
        <span className="Home-Overview-Iconpreview-item">
          {home.information.bathrooms + " bath"}
        </span>
      </div>
    </span>
    <span className="Home-Overview-Header right">
      <div className="host-img" />
    </span>
  </Fragment>
);

Header.propTypes = {
  home: PropTypes.object.isRequired
};

export default Header;
