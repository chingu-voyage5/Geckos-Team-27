import React from "react";
import PropTypes from "prop-types";
import ButtonIconText from "../../UI/ButtonIconText/ButtonIconText";
import "./HeroImg.css";

const HeroImg = ({ image, onClick }) => (
  <div
    onClick={onClick}
    className="Hero-Img"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    <div className="Hero-Img-btn-group">
      <ButtonIconText
        onClick={() => {}}
        btnClass="btn-grey-outline unallow-link"
        text="Share"
        icon="fas fa-share"
      />
      <ButtonIconText
        onClick={() => {}}
        btnClass="btn-grey-outline unallow-link"
        text="Save"
        icon="fas fa-heart"
      />
    </div>
    <ButtonIconText
      onClick={() => onClick}
      btnClass="btn-grey-outline"
      text="View Photos"
      icon=""
    />
  </div>
);

HeroImg.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HeroImg;
