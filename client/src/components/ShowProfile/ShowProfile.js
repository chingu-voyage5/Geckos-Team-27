import React from "react";
import Loader from "../UI/Loader/Loader";
import ProfileOverview from "./ProfileOverview/ProfileOverview";
import { formatJoinDate } from "../.././utils";
import "./ShowProfile.css";

const showProfile = ({ data }) => {
  const user = data;
  if (!user) {
    return <Loader />;
  }
  return (
    <div className="Show-Profile">
      <div className="leftSide">
        <div className="Image-Container">
          <img
            src={user.image || "http://via.placeholder.com/250x250"}
            alt={`${user.firsName} ${user.lastName}`}
          />
        </div>
        <ProfileOverview user={user} />
      </div>
      <div className="rightSide">
        <h1>Hey, I'm {user.firstName}!</h1>
        <h4>
          {user.city || "We don't know your location yet!"} · Joined{" "}
          {formatJoinDate(user.joindate)}
        </h4>
        <div className="intro">
          <p>{user.intro}</p>
        </div>
        <h2>
          References <small>({user.references.length || "0"})</small>
        </h2>
        {user.references.length ? (
          <h4>Unfortunately this feature is not ready yet</h4>
        ) : (
          <h4>This user has no references</h4>
        )}
      </div>
    </div>
  );
};

export default showProfile;
