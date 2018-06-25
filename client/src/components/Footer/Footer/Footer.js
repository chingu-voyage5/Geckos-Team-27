import React, { Fragment } from "react";
import ButtonIconText from "../../UI/ButtonIconText/ButtonIconText";
import SmallFooter from "../SmallFooter/SmallFooter";
import Toggle from "../../../hoc/Toggle/Toggle";
import "./Footer.css";

const Footer = () => (
  <Fragment>
    <SmallFooter className="mobile-ft" />
    <Toggle>
      {({ on, toggle }) => (
        <Fragment>
          {on && <LargeFooter toggle={toggle} />}
          {!on && (
            <ButtonIconText
              container="ft-tgg"
              btnClass="ft-tgg-btn"
              onClick={toggle}
              text="Terms, Privacy, Currency & More"
              icon="fas fa-globe"
            />
          )}
        </Fragment>
      )}
    </Toggle>
  </Fragment>
);

export default Footer;
