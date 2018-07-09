import React from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/ButtonIconText/ButtonIconText";

import "./AuthForm.css";

const loginForm = () => (
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
    <form action="/" method="POST">
      <Input name="user[email]" placeholder="email address">
        <i className="fas fa-envelope-square Input-Icon" />
      </Input>
      <Input name="user[password]" type="password" placeholder="Password">
        <i className="fas fa-lock Input-Icon" />
      </Input>
      <label className="GreenText">
        <input type="checkbox" name="savePassword" />
        Save Password
      </label>
      <button className="Form-Button Button-Red">Log in</button>
    </form>
    <p className="text-centered">
      <a href="/forgot_password" className="GreenText">
        Forgot password?
      </a>
    </p>
    <hr />
    <p className="text-centered">
      No account? <a className="GreenText">Register</a>
    </p>
  </div>
);

export default loginForm;
