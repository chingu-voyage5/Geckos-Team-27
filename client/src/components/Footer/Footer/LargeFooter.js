import React from "react";
import ButtonIconText from "../../UI/ButtonIconText/ButtonIconText";
import SmallFooter from "../SmallFooter/SmallFooter";
import FooterLinks from "../FooterLinks/FooterLinks";
import "./Footer.css";

const LargeFooter = ({ toggle }) => (
  <div className="lg-ft">
    <div>
      <FooterLinks />
      <SmallFooter />
    </div>
    <br />
    <ButtonIconText
      container="ft-tgg"
      btnClass="ft-tgg-btn"
      onClick={toggle}
      text="Close"
      icon="fas fa-times"
    />
  </div>
);

export default LargeFooter;
