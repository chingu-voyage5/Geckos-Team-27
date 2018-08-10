import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserRequest } from "../../redux/actions/index";
import ShowProfile from "../../components/ShowProfile/ShowProfile";
import "./Profile.css";

class Profile extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    getUserRequest: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };
  async componentDidMount() {
    await this.props.getUserRequest(this.props.match.params.user);
  }
  render() {
    const { user } = this.props.users;
    return (
      <div className="flex-row flex-center">
        <div className="Profile-Container">
          <ShowProfile user={user} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUserRequest }
)(Profile);
