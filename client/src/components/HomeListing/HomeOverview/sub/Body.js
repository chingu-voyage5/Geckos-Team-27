import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Body = ({ home }) => (
  <Fragment>
    <div>{home.information.description}</div>
    <h4>The space</h4>
    <div>{home.information.homespace}</div>
    <h4>Guest access</h4>
    <div>{home.information.guestaccess}</div>
    <h4>Interaction with guests</h4>
    <div>{home.information.interaction}</div>
    <h4>Other things to note</h4>
    <div>{home.information.othernotes}</div>
    <Link to={`/users/${home.hostid}`} className="Home-Overview-link">
      Contact Host
    </Link>
  </Fragment>
);

Body.propTypes = {
  home: PropTypes.object.isRequired
};

export default Body;
