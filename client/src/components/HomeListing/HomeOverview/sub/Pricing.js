import React from "react";
import PropTypes from "prop-types";

const Pricing = ({ home }) => (
  <div>
    {home.information.price.extra && (
      <div>
        <span>Extra people </span>
        <span className="bold-text">
          {`$ ${home.information.price.extra}/night after ${
            home.information.price.extraminguest
          }` +
            (home.information.price.extraminguest === 1 ? " guest" : " guests")}
        </span>
      </div>
    )}
    <div>
      <span>Cleaning Fee </span>
      <span className="bold-text">{`$ ${
        home.information.price.cleaning
      }`}</span>
    </div>
    <div className="Home-Overview-Pricing-disclaimer">
      <div className="bold-text">Always communicate through Geckobnb</div>
      <div>
        To protect your payment, never transfer money or communicate outside of
        the Geckbnb website or app.
      </div>
      <a className="Home-Overview-link unallow-link">Learn More</a>
    </div>
  </div>
);

Pricing.propTypes = {
  home: PropTypes.object.isRequired
};

export default Pricing;
