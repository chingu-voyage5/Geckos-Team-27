import React, { Component } from "react";
import PropTypes from "prop-types";
import Arrow from "../../UI/Carousel/Arrow/Arrow";
import "./Album.css";

class Album extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    toggle: PropTypes.func.isRequired
  };
  state = {
    x_axis: 0,
    activeImage: 0
  };
  transformHandler = direction => e => {
    const { images } = this.props;
    const currentAxis = this.state.x_axis;
    const currentImage = this.state.activeImage;

    if (currentAxis < (images.length - 2) * -160 && direction === "right") {
      this.setState({ x_axis: 0, activeImage: 1 });
    } else if (0 < currentAxis + 160 && direction === "left") {
      this.setState({
        x_axis: (images.length - 1) * -160,
        activeImage: images.length
      });
    } else if (direction === "right") {
      this.setState({
        x_axis: currentAxis - 160,
        activeImage: currentImage + 1
      });
    } else if (direction === "left") {
      this.setState({
        x_axis: currentAxis + 160,
        activeImage: currentImage - 1
      });
    }
  };
  render() {
    const { images, toggle } = this.props;
    const { x_axis, activeImage } = this.state;
    const transformStyle = { transform: `translateX(${x_axis}px)` };
    let curimage = {
      backgroundImage: `url(${images[activeImage]})`,
      backgroundSize: "cover",
      backgroundPosition: "50% 50%"
    };
    return (
      <div className="Home-Album">
        <div className="Home-Album-toggle">
          <p onClick={toggle}>X</p>
        </div>
        <div className="Home-Album-carousel">
          <Arrow
            direction="left"
            onClick={this.transformHandler("left")}
            className="album-arrow"
          />
          <div className="Home-Album-img-container">
            <div className="currentImg" style={curimage} />
            <div className="images">
              <ul style={transformStyle}>
                {images.map(img => {
                  const image = {
                    background: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%"
                  };
                  return <li key={img} className="albumImg" style={image} />;
                })}
              </ul>
            </div>
          </div>
          <Arrow
            direction="right"
            onClick={this.transformHandler("right")}
            className="album-arrow"
          />
        </div>
      </div>
    );
  }
}

export default Album;
