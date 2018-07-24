import React from "react";
import DivWithTitle from "../UI/DivWithTitle/DivWithTitle";
import Loader from "../UI/Loader/Loader";
import { formatJoinDate } from "../.././utils";
import "./ShowProfile.css";

const showProfile = props => {
  if (!props.data) {
    return <Loader />;
  }
  return (
    <div className="Show-Profile">
      <div className="leftSide">
        <div className="Image-Container">
          <img
            src={props.data.image || "http://via.placeholder.com/250x250"}
            alt={`${props.data.firsName} ${props.data.lastName}`}
          />
        </div>
        <DivWithTitle title="Verified info" classes="Verification">
          <p>No verifications yet</p>
        </DivWithTitle>
      </div>
      <div className="rightSide">
        <h1>Hey, I'm {props.data.firstName}!</h1>
        <h4>
          {props.data.city || "We don't know your location yet!"} · Joined{" "}
          {formatJoinDate(props.data.joindate)}
        </h4>
        <div className="intro">
          <p>{props.data.intro}</p>
        </div>
        <h2>
          References <small>({props.data.references.length || "0"})</small>
        </h2>
        {props.data.references.length ? (
          <h4>Unfortunately this feature is not ready yet</h4>
        ) : (
          <h4>This user has no references</h4>
        )}
      </div>
    </div>
  );
};

export default showProfile;
