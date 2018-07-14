import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editUserRequest } from "../../redux/actions/index";
import Toggle from "../../hoc/Toggle/Toggle";
import DivWithTitle from "../UI/DivWithTitle/DivWithTitle";
import "./EditPhotos.css";

class EditPhotos extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    editUserRequest: PropTypes.func.isRequired
  };
  state = {
    image: null
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = toggle => e => {
    e.preventDefault();
    const { _id } = this.props.data;
    this.props.editUserRequest(this.state, _id);
    toggle();
  };
  render() {
    const geckos = [
      "https://i.imgur.com/ogiEbVp.jpg",
      "https://i.imgur.com/h59ZIK7.jpg",
      "https://i.imgur.com/ceiVSQd.png",
      "https://i.imgur.com/z5jafqa.jpg"
    ];

    const radioButtons = geckos.map((image, index) => (
      <label key={index}>
        <img src={image} alt="gecko" />
        <input
          type="radio"
          value={image}
          name="image"
          onChange={this.onChange}
        />
      </label>
    ));
    return (
      <Fragment>
        <Toggle>
          {({ toggle, on }) => (
            <Fragment>
              {on && <h3>You have choosen an avatar!</h3>}
              {!on && (
                <DivWithTitle title="Avatar" classes="Edit-Photos">
                  <form
                    className="Select-Image"
                    onSubmit={this.submitHandler(toggle)}
                  >
                    {radioButtons}
                    <button className="Form-Btn">Save</button>
                  </form>
                </DivWithTitle>
              )}
            </Fragment>
          )}
        </Toggle>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { editUserRequest }
)(EditPhotos);
