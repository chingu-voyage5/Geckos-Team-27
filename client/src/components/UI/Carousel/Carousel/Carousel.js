import React, { Component } from "react";
import PropTypes from "prop-types";
import Arrow from "../Arrow/Arrow";
import Listing from "../../Listing/Listing";
import "./Carousel.css";

class Carousel extends Component {
  static propTypes = {
    listings: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  };
  state = {
    clickCounter: 0,
    currentPosition: 0,
    listings: []
  };
  componentDidMount() {
    this.leftArrowDOM = document.getElementsByClassName("arrow-left")[0];
    this.rightArrowDOM = document.getElementsByClassName("arrow-right")[0];
    this.listCount = document.getElementsByClassName("listing");
    this.thisCarousel = document.getElementsByClassName("carousel")[0];
    this.buildListings();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.listings !== prevProps.listings) {
      this.leftArrowDOM.classList.add("hidden");
      this.rightArrowDOM.classList.remove("hidden");
      this.thisCarousel.style.transform = "translateX(0%)";
    }
  }
  buildListings = (props = this.props) => {
    const { listings } = props;
    const collection = listings.map((listing, index) => (
      <Listing listingData={listing} key={index} />
    ));
    this.leftArrowDOM.classList.add("hidden");
    this.setState({
      clickCounter: 0,
      currentPosition: 0,
      listings: collection
    });
  };
  handleArrow = dir => {
    const listCount = this.listCount.length;
    let { clickCounter, currentPosition } = this.state;

    let w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );

    let positionModifier = -100 / listCount;
    let displayTiles = w < 1024 ? 2 : 3;
    let endPoint = listCount - displayTiles;

    if (dir === "left") {
      currentPosition -= +positionModifier;
      clickCounter--;
    } else {
      currentPosition += +positionModifier;
      clickCounter++;
    }

    this.thisCarousel.style.transform = "translateX(" + currentPosition + "%)";

    clickCounter === 0
      ? this.leftArrowDOM.classList.add("hidden")
      : this.leftArrowDOM.classList.remove("hidden");
    clickCounter === endPoint
      ? this.rightArrowDOM.classList.add("hidden")
      : this.rightArrowDOM.classList.remove("hidden");

    this.setState({ clickCounter, currentPosition });
  };

  render() {
    const { title } = this.props;
    return (
      <div className="carousel-container">
        <div className="carousel-banner">
          <h3>{title !== "" && title}</h3>
        </div>
        <Arrow direction="left" onClick={() => this.handleArrow("left")} />
        <div className="carousel-wrap">
          <div className="carousel">{this.state.listings}</div>
        </div>
        <Arrow direction="right" onClick={() => this.handleArrow("right")} />
      </div>
    );
  }
}

Carousel.defaultProps = {
  title: ""
};

export default Carousel;
