import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Toggle from "../../../hoc/Toggle/Toggle";
import Modal from "../../UI/Modal/Modal";
import LoginForm from "../../Auth/LoginForm";
import RegisterForm from "../../Auth/RegisterForm";

const GuestLinks = ({ className, signUp = true, login = true }) => (
  <Fragment>
    {signUp && (
      <Toggle>
        {({ on, toggle, backdrop, swap, toggleSwap }) => (
          <Fragment>
            <button onClick={toggle} className={className}>
              Sign Up
            </button>
            {on && backdrop("Modal-Backdrop Backdrop-Dark")}
            {on && (
              <Modal open={on} onClose={toggle}>
                {!swap && <RegisterForm toggleSwap={toggleSwap} />}
                {swap && <LoginForm toggleSwap={toggleSwap} toggle={toggle} />}
              </Modal>
            )}
          </Fragment>
        )}
      </Toggle>
    )}
    {login && (
      <Toggle>
        {({ on, toggle, backdrop, swap, toggleSwap }) => (
          <Fragment>
            <button onClick={toggle} className={className}>
              Login
            </button>
            {on && backdrop("Modal-Backdrop Backdrop-Dark")}
            {on && (
              <Modal open={on} onClose={toggle}>
                {!swap && <LoginForm toggleSwap={toggleSwap} toggle={toggle} />}
                {swap && <RegisterForm toggleSwap={toggleSwap} />}
              </Modal>
            )}
          </Fragment>
        )}
      </Toggle>
    )}
  </Fragment>
);

GuestLinks.propTypes = {
  className: PropTypes.string,
  signUp: PropTypes.bool.isRequired,
  login: PropTypes.bool.isRequired
};

export default GuestLinks;
