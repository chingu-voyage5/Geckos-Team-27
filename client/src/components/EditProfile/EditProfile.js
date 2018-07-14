import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editUserRequest } from "../../redux/actions/index";
import Loader from "../UI/Loader/Loader";
import Toggle from "../../hoc/Toggle/Toggle";
import EditProfileForm from "./EditProfileForm";
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
  onSubmit = toggle => e => {
    e.preventDefault();
    // user id
    const { _id } = this.props.data;
    // call redux action
    this.props.editUserRequest(this.state, _id);
    toggle();
  };
  render() {
    const { data } = this.props;
    if (!data) {
      return <Loader />;
    }
    return (
      <div className="Edit-Container">
        <Toggle>
          {({ toggle, on }) => (
            <Fragment>
              {on && <h3>You have edited your profile!</h3>}
              {!on && (
                <EditProfileForm
                  value={this.state}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit(toggle)}
                />
              )}
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default connect(
  null,
  { editUserRequest }
)(EditProfile);
