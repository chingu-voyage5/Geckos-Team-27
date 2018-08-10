import React, { Fragment } from "react";
import ToggleSwitch from "react-toggle-switch";
import "./Map.css";

const ToggleMap = ({ toggleMap, showMap }) => (
  <div key="map-toggle" className="Map-Toggle">
    <small>Show map</small>
    <Fragment>
      <ToggleSwitch onClick={toggleMap} on={showMap}>
        <i className={"fas " + (showMap ? "fa-check" : "fa-times")} />
      </ToggleSwitch>
    </Fragment>
  </div>
);

export default ToggleMap;
