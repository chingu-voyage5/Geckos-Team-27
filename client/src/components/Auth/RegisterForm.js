import React from "react";
import Input from "../UI/Input/Input";
// import ButtonIconText from "../UI/ButtonIconText/ButtonIconText";
import Select from "../UI/Select/Select";

import "./AuthForm.css";

const loginForm = props => (
  <div className="AuthModal RegisterModal">
    <i className="fas fa-times AuthModal-Close" onClick={props.toggle} />
    <p className="text-centered">
      Sign up using <a className="GreenText">Facebook</a> or{" "}
      <a className="GreenText">Google</a>
    </p>
    <hr />
    <form action="/" method="POST">
      <Input name="email" placeholder="email address">
        <i className="fas fa-envelope-square Input-Icon" />
      </Input>
      <Input name="email" placeholder="First Name">
        <i className="far fa-user Input-Icon" />
      </Input>
      <Input name="email" placeholder="Last Name">
        <i className="far fa-user Input-Icon" />
      </Input>
      <Input name="password" type="password" placeholder="Create a password">
        <i className="fas fa-lock Input-Icon" />
      </Input>

      <p>Birthday</p>
      <p>
        <small>
          To sign up, you must be 18 or older. Other people won&apos;t see your
          birthday.
        </small>
      </p>

      <div className="Birth-Date">
        <Select first={1} last={30} name="Day" />
        <Select months />
        <Select first={2000} last={1900} name="Year" />
      </div>

      <p>
        <small>
          We’ll send you marketing promotions, special offers, inspiration, and
          policy updates via email.
        </small>
      </p>

      <button className="Form-Button Button-Red">Register</button>

      <label>
        <input type="checkbox" name="marketing" />
        <small>
          I don&apos;t want to receive marketing messages from Airbnb. I can
          also opt out of receiving these at any time in my account settings or
          via the link in the message.
        </small>
      </label>
    </form>
    <hr />
    <p className="text-centered">
      Already have an Geckosbnb account? <a className="GreenText">Login</a>
    </p>
  </div>
);

export default loginForm;
