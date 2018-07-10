import React, { Fragment } from "react";
import Toggle from "../../../hoc/Toggle/Toggle";
import Modal from "../../UI/Modal/Modal";
import LoginForm from "../../Auth/LoginForm";
import RegisterForm from "../../Auth/RegisterForm";

const GuestLinks = ({ className }) => (
  <Fragment>
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
              {swap && <LoginForm toggleSwap={toggleSwap} />}
            </Modal>
          )}
        </Fragment>
      )}
    </Toggle>
    <Toggle>
      {({ on, toggle, backdrop, swap, toggleSwap }) => (
        <Fragment>
          <button onClick={toggle} className={className}>
            Login
          </button>
          {on && backdrop("Modal-Backdrop Backdrop-Dark")}
          {on && (
            <Modal open={on} onClose={toggle}>
              {!swap && <LoginForm toggleSwap={toggleSwap} />}
              {swap && <RegisterForm toggleSwap={toggleSwap} />}
            </Modal>
          )}
        </Fragment>
      )}
    </Toggle>
  </Fragment>
);

export default GuestLinks;
