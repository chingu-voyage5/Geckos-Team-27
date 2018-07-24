import React, { Fragment } from "react";
import PropTypes from "prop-types";
import DivWithTitle from "../UI/DivWithTitle/DivWithTitle";
import InputWithLabel from "../UI/InputWithLabel/InputWithLabel";
import SelectWithLabel from "../UI/SelectWithLabel/SelectWithLabel";

const EditProfileForm = ({ onSubmit, value, onChange }) => (
  <Fragment>
    <DivWithTitle title="Required">
      <form onSubmit={onSubmit}>
        <InputWithLabel
          name="firstName"
          label="First name"
          value={value.firstName}
          onChange={onChange}
        />
        <InputWithLabel
          name="lastName"
          label="Last name"
          value={value.lastName}
          onChange={onChange}
          message="Your public profile only shows your first name. When you request a booking, your host will see your first and last name."
        />
        <SelectWithLabel
          name="gender"
          label="Gender"
          type="genders"
          initial="Gender"
          value={value.gender}
          onChange={onChange}
        />
        <InputWithLabel
          name="email"
          label="email address"
          type="email"
          placeholder="What's your email?"
          value={value.email}
          onChange={onChange}
        />
        <InputWithLabel
          name="intro"
          label="Describe Yourself"
          type="textarea"
          placeholder="e.g I'm cool, I like coding, I like music"
          onChange={onChange}
          value={value.intro}
        />
        <InputWithLabel
          name="city"
          label="Where you live"
          type="text"
          placeholder="e.g New York City / Warsaw / Stockholm"
          value={value.city}
          onChange={onChange}
        />
        <InputWithLabel
          name="state"
          label="Which is in the state of"
          type="text"
          placeholder="e.g New York"
          value={value.state}
          onChange={onChange}
        />
        <InputWithLabel
          name="country"
          label="In the country of"
          type="text"
          placeholder="e.g US"
          value={value.country}
          onChange={onChange}
        />
        <InputWithLabel
          name="languages"
          label="Languages"
          type="text"
          placeholder="Languages that you speak, separated with comma"
          value={value.languages}
          onChange={onChange}
        />
        <InputWithLabel
          name="work"
          label="Work"
          type="text"
          placeholder="What do you do for work? We won't say to anyone, pinky promise"
          value={value.work}
          onChange={onChange}
        />
        <button className="Form-Btn">Submit</button>
      </form>
    </DivWithTitle>
  </Fragment>
);

EditProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EditProfileForm;
