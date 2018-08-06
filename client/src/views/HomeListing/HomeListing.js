import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchHomeRequest,
  getUserRequest,
  fetchReviewsRequest
} from "../../redux/actions/index";
import Carousel from "../../components/UI/Carousel/Carousel/Carousel";
import HomeOverview from "../../components/HomeListing/HomeOverview/HomeOverview";
import ReviewStars from "../../components/HomeListing/Review/ReviewStars/ReviewStars";
import HostDisplay from "../../components/HomeListing/Host-Display/HostDisplay";
import Booking from "../../components/HomeListing/Booking/Booking";
import Review from "../../components/UI/Review/Review";
import Toggle from "../../hoc/Toggle/Toggle";
import HeroImg from "../../components/HomeListing/Hero-Img/HeroImg";
import Album from "../../components/HomeListing/Album/Album";
import "./HomeListing.css";
import { isEmpty } from "../../utils";

class HomeListing extends Component {
  static propTypes = {
    homes: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    fetchHomeRequest: PropTypes.func.isRequired,
    getUserRequest: PropTypes.func.isRequired,
    fetchReviewsRequest: PropTypes.func.isRequired
  };
  state = {
    carouselListings: []
  };
  async componentDidMount() {
    await this.props.fetchHomeRequest(this.props.match.params.home);
    await this.props.getUserRequest(this.props.homes.home.hostid);
    await this.props.fetchReviewsRequest();
    await this.addCarouselListings();
  }
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.url !== prevProps.match.url) {
      await this.props.fetchHomeRequest(this.props.match.params.home);
      await this.props.getUserRequest(this.props.homes.home.hostid);
      await this.props.fetchReviewsRequest();
      await this.addCarouselListings();
    }
  }
  addCarouselListings = () => {
    const { homes } = this.props.homes;
    const listings = Object.keys(homes).map(listing => homes[listing]);
    const carouselListings = listings.slice(0, 6);
    this.setState({ carouselListings });
  };
  render() {
    const {
      homes: { home },
      users: { user },
      reviews: { reviews }
    } = this.props;
    const { carouselListings } = this.state;
    if (isEmpty(home) || isEmpty(reviews) || isEmpty(user)) {
      return null;
    }
    return (
      <div className="flex-column">
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              {!on && (
                <HeroImg
                  image={home.images[0].split(",")[0]}
                  onClick={toggle}
                />
              )}
              {on && (
                <Album toggle={toggle} images={home.images[0].split(",")} />
              )}
            </Fragment>
          )}
        </Toggle>
        <div className="HomeListing-nav">
          <a href="#overview">Overview</a>
          <a href="#reviews">Reviews</a>
          <a href="#host">The Host</a>
          <a href="#location">Location</a>
        </div>
        <div className="flex-column HomeListing-body">
          <div className="HomeListing-top">
            <div className="HomeListing-left" id="overview">
              <HomeOverview home={home} />
              <div className="Review-List" id="reviews">
                <ReviewStars
                  reviewAvg={home.reviewAvg}
                  reviews={home.reviews}
                />
                {Object.keys(home.reviews).map(key => {
                  let reviewNum = home.reviews[key];
                  let review = reviews[reviewNum];
                  return <Review key={key} review={review} />;
                })}
              </div>
              <div id="host">
                <HostDisplay user={user} />
              </div>
            </div>
            <div className="HomeListing-right">
              <Booking home={home} />
            </div>
          </div>
        </div>
        {/* todo: add home map */}
        {carouselListings.length > 0 && (
          <div className="flex-column" id="location">
            <div className="flex-center">
              <Carousel listings={carouselListings} title="Similar Listings" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homes: state.homes,
  users: state.users,
  reviews: state.reviews
});

export default connect(
  mapStateToProps,
  { fetchHomeRequest, getUserRequest, fetchReviewsRequest }
)(HomeListing);
