import React from "react";
import PropTypes from "prop-types";

const SafetyFeatures = ({ home }) => (
  <div className="Home-Overview-Safety">
    <div
      className={
        home.information.safetyfeatures.smoke
          ? "Home-Overview-Safety-item"
          : "Home-Overview-Safety-item crossout"
      }
    >
      Smoke detector
    </div>
    <div
      className={
        home.information.safetyfeatures.fire
          ? "Home-Overview-Safety-item"
          : " Home-Overview-Safety-item crossout"
      }
    >
      Fire extinguisher
    </div>
    <div
      className={
        home.information.safetyfeatures.firstaid
          ? "Home-Overview-Safety-item"
          : " Home-Overview-Safety-item crossout"
      }
    >
      First aid kit
    </div>
  </div>
);

SafetyFeatures.propTypes = {
  home: PropTypes.object.isRequired
};

export default SafetyFeatures;
