import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Input from "../UI/Input/Input";
import Button from "../UI/ButtonIconText/ButtonIconText";
import { loginUserRequest } from "../../redux/actions/index";
import "./AuthForm.css";

class LoginForm extends Component {
  static propTypes = {
    toggleSwap: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    loginUserRequest: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  state = {
    email: "",
    password: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    // call redux action
    this.props.loginUserRequest(user);
  };
  render() {
    const { toggleSwap } = this.props;
    const { email, password } = this.state;
    return (
      <div>
        <div className="AuthModal">
          <Button
            text="Log in using Facebook"
            onClick={() => {
              console.log("xd");
            }}
            icon="fab fa-facebook"
            btnClass="Form-Button Button-Blue"
          />
          <Button
            text="Log in using Google"
            onClick={() => {
              console.log("xd");
            }}
            icon="fab fa-google"
            btnClass="Form-Button Button-White"
          />
          <hr />
          <form onSubmit={this.onSubmit}>
            <Input
              name="email"
              placeholder="email address"
              onChange={this.onChange}
              value={email}
            >
              <i className="fas fa-envelope-square Input-Icon" />
            </Input>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.onChange}
              value={password}
            >
              <i className="fas fa-lock Input-Icon" />
            </Input>
            <label className="GreenText">
              <input type="checkbox" name="savePassword" />
              Save Password
            </label>
            <button className="Form-Button Button-Red">Log in</button>
          </form>
          <p className="text-centered">
            <a className="GreenText unallow-link">Forgot password?</a>
          </p>
          <hr />
          <p className="text-centered">
            No account?{" "}
            <a className="GreenText" onClick={toggleSwap}>
              Register
            </a>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUserRequest }
)(LoginForm);
