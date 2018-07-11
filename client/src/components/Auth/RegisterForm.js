import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import { connect } from "react-redux";
import { registerUserRequest } from "../../redux/actions/index";
import "./AuthForm.css";
import { isEmpty } from "../../utils";

class RegisterForm extends Component {
  static propTypes = {
    toggleSwap: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    registerUserRequest: PropTypes.func.isRequired
  };
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    birthday: "",
    birthmonth: "",
    birthyear: ""
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!isEmpty(nextProps.auth.user)) {
      nextProps.toggleSwap();
    }
    return null;
  }
  handleSelect = (e, name) => {
    this.setState({ [name]: e.target.value });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log("user.....", this.state);
    // call redux action
    this.props.registerUserRequest(this.state);
  };
  render() {
    const { toggleSwap } = this.props;
    const {
      email,
      firstName,
      lastName,
      password,
      birthday,
      birthmonth,
      birthyear
    } = this.state;
    return (
      <div className="AuthModal RegisterModal">
        <p className="text-centered">
          Sign up using <a className="GreenText">Facebook</a> or{" "}
          <a className="GreenText">Google</a>
        </p>
        <hr />
        <form onSubmit={this.onSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={this.handleChange}
          >
            <i className="fas fa-envelope-square Input-Icon" />
          </Input>
          <Input
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleChange}
          >
            <i className="far fa-user Input-Icon" />
          </Input>
          <Input
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleChange}
          >
            <i className="far fa-user Input-Icon" />
          </Input>
          <Input
            name="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={this.handleChange}
          >
            <i className="fas fa-lock Input-Icon" />
          </Input>

          <p>Birthday</p>
          <p>
            <small>
              To sign up, you must be 18 or older. Other people won&apos;t see
              your birthday.
            </small>
          </p>
      <div className="Birth-Date">
        <Select first={1} last={30} name="birthday" initial="Day" onChange={e => this.handleSelect(e, "birthday")} />
        <Select type="months" name="birthmonth" initial="Month" onChange={e => this.handleSelect(e, "birthmonth")} />
        <Select first={2000} last={1900} name="birthyear" initial="Year" onChange={e => this.handleSelect(e, "birthyear")} />
      </div>

          <p>
            <small>
              We’ll send you marketing promotions, special offers, inspiration,
              and policy updates via email.
            </small>
          </p>

          <button className="Form-Button Button-Red">Register</button>

          <label>
            <input type="checkbox" name="marketing" />
            <small>
              I don&apos;t want to receive marketing messages from Airbnb. I can
              also opt out of receiving these at any time in my account settings
              or via the link in the message.
            </small>
          </label>
        </form>
        <hr />
        <p className="text-centered">
          Already have an Geckosbnb account?{" "}
          <a className="GreenText" onClick={toggleSwap}>
            Login
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUserRequest }
)(RegisterForm);
