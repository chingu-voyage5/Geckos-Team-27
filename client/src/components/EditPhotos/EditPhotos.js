import React, { Component } from "react";

import "./EditPhotos.css";

import DivWithTitle from "../UI/DivWithTitle/DivWithTitle";

class EditPhotos extends Component {
  submitHandler = e => {
    e.preventDefault();
    console.log(e.target.image.value);
    // make a request and change a user's image
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
        <input type="radio" value={image} name="image" />
      </label>
    ));

    return (
      <DivWithTitle title="Profile Photo" classes="Edit-Photos">
        <form className="Select-Image" action="/" onSubmit={this.submitHandler}>
          {radioButtons}
          <button className="Form-Btn">Save</button>
        </form>
      </DivWithTitle>
    );
  }
}

export default EditPhotos;
