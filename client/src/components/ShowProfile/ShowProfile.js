import React from "react";
import { connect } from "react-redux";
import Loader from "../UI/Loader/Loader";
import ProfileOverview from "./ProfileOverview/ProfileOverview";
import Review from "../../components/UI/Review/Review";
import HostIcon from "../../components/UI/HostIcon/HostIcon";
import { fetchReviewsRequest } from "../../redux/actions/index";
import { formatJoinDate } from "../.././utils";
import "./ShowProfile.css";

class showProfile extends React.Component {
  async componentDidMount() {
    await this.props.fetchReviewsRequest();
  }
  render() {
    const {
      user,
      reviews: { reviews }
    } = this.props;
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
          <HostIcon user={user} />
          <h2>
            Reviews <small>{user.reviews.length || 0}</small>
          </h2>
          {Object.keys(user.reviews).map(key => {
            let reviewNum = user.reviews[key];
            let rev = reviews[reviewNum];
            return <Review key={key} review={rev} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews
});

export default connect(
  mapStateToProps,
  { fetchReviewsRequest }
)(showProfile);
