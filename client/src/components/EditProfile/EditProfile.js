import React from "react";

import "./EditProfile.css";

import DivWithTitle from "../UI/DivWithTitle/DivWithTitle";
import InputWithLabel from "../UI/InputWithLabel/InputWithLabel";
import SelectWithLabel from "../UI/SelectWithLabel/SelectWithLabel";
import Loader from "../UI/Loader/Loader";

const editProfile = props => {
  if (!props.data) {
    return <Loader />;
  }
  console.log(props.data);
  return (
    <div className="Edit-Container">
      <DivWithTitle title="Required">
        <form action="/" method="post">
          <InputWithLabel
            name="firstName"
            label="First name"
            value={props.data.firstName}
          />
          <InputWithLabel
            name="lastName"
            label="Last name"
            value={props.data.lastName}
            message="Your public profile only shows your first name. When you request a booking, your host will see your first and last name."
          />
          <SelectWithLabel
            name="gender"
            label="Gender"
            type="genders"
            initial="Gender"
            value={props.data.gender}
          />
          <InputWithLabel
            name="email"
            label="email address"
            type="email"
            placeholder="What's your email?"
            value={props.data.email}
          />
          <InputWithLabel
            name="city"
            label="Describe Yourself"
            type="textarea"
            placeholder="e.g I'm cool, I like coding, I like music"
            value={props.data.intro}
          />
          <InputWithLabel
            name="city"
            label="Where you live"
            type="text"
            placeholder="e.g New York City / Warsaw / Stockholm"
            value={props.data.city}
          />
          <InputWithLabel
            name="state"
            label="Which is in the state of"
            type="text"
            placeholder="e.g New York"
            value={props.data.state}
          />
          <InputWithLabel
            name="country"
            label="In the country of"
            type="text"
            placeholder="e.g US"
            value={props.data.country}
          />
          <InputWithLabel
            name="languages"
            label="Languages"
            type="text"
            placeholder="Languages that you speak, separated with comma"
            value={props.data.languages}
          />
          <InputWithLabel
            name="work"
            label="Work"
            type="text"
            placeholder="What do you do for work? We won't say to anyone, pinky promise"
            value={props.data.work}
          />
          <button className="Form-Btn">Submit</button>
        </form>
      </DivWithTitle>
    </div>
  );
};

export default editProfile;
