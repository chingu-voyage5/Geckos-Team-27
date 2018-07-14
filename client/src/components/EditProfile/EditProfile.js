import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editUserRequest } from "../../redux/actions/index";
import DivWithTitle from "../UI/DivWithTitle/DivWithTitle";
import InputWithLabel from "../UI/InputWithLabel/InputWithLabel";
import SelectWithLabel from "../UI/SelectWithLabel/SelectWithLabel";
import Loader from "../UI/Loader/Loader";
import { originalValueOrEmptyStr } from "../../utils";
import "./EditProfile.css";

const updateEditProfileForm = userData => ({
  firstName: originalValueOrEmptyStr(userData.firstName),
  lastName: originalValueOrEmptyStr(userData.lastName),
  gender: originalValueOrEmptyStr(userData.gender),
  email: originalValueOrEmptyStr(userData.email),
  intro: originalValueOrEmptyStr(userData.intro),
  city: originalValueOrEmptyStr(userData.city),
  state: originalValueOrEmptyStr(userData.state),
  country: originalValueOrEmptyStr(userData.country),
  languages: originalValueOrEmptyStr(userData.languages),
  work: originalValueOrEmptyStr(userData.work)
});

class EditProfile extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    editUserRequest: PropTypes.func.isRequired
  };
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    intro: "",
    city: "",
    state: "",
    country: "",
    languages: "",
    work: ""
  };
  componentDidMount = () => {
    this.setState(updateEditProfileForm(this.props.data));
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    // user id
    const { _id } = this.props.data;
    // call redux action
    this.props.editUserRequest(this.state, _id);
  };
  render() {
    const { data } = this.props;
    const {
      firstName,
      lastName,
      gender,
      email,
      intro,
      city,
      state,
      country,
      languages,
      work
    } = this.state;
    if (!data) {
      return <Loader />;
    }
    return (
      <div className="Edit-Container">
        <DivWithTitle title="Required">
          <form onSubmit={this.onSubmit}>
            <InputWithLabel
              name="firstName"
              label="First name"
              value={firstName}
              onChange={this.onChange}
            />
            <InputWithLabel
              name="lastName"
              label="Last name"
              value={lastName}
              onChange={this.onChange}
              message="Your public profile only shows your first name. When you request a booking, your host will see your first and last name."
            />
            <SelectWithLabel
              name="gender"
              label="Gender"
              type="genders"
              initial="Gender"
              value={gender}
              onChange={this.onChange}
            />
            <InputWithLabel
              name="email"
              label="email address"
              type="email"
              placeholder="What's your email?"
              value={email}
              onChange={this.onChange}
            />
            <InputWithLabel
              name="intro"
              label="Describe Yourself"
              type="textarea"
              placeholder="e.g I'm cool, I like coding, I like music"
              onChange={this.onChange}
              value={intro}
            />
            <InputWithLabel
              name="city"
              label="Where you live"
              type="text"
              placeholder="e.g New York City / Warsaw / Stockholm"
              value={city}
              onChange={this.onChange}
            />
            <InputWithLabel
              name="state"
              label="Which is in the state of"
              type="text"
              placeholder="e.g New York"
              value={state}
              onChange={this.onChange}
            />
            <InputWithLabel
              name="country"
              label="In the country of"
              type="text"
              placeholder="e.g US"
              value={country}
              onChange={this.onChange}
            />
            <InputWithLabel
              name="languages"
              label="Languages"
              type="text"
              placeholder="Languages that you speak, separated with comma"
              value={languages}
              onChange={this.onChange}
            />
            <InputWithLabel
              name="work"
              label="Work"
              type="text"
              placeholder="What do you do for work? We won't say to anyone, pinky promise"
              value={work}
              onChange={this.onChange}
            />
            <button className="Form-Btn">Submit</button>
          </form>
        </DivWithTitle>
      </div>
    );
  }
}

export default connect(
  null,
  { editUserRequest }
)(EditProfile);
