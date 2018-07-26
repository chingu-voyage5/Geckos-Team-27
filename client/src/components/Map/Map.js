import React, { Component } from "react";
import ReactDOM from "react-dom";
import GoogleMapReact from "google-map-react";
import { apiKey } from "../../key";

import "./Map.css";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  el = document.getElementsByClassName("Listings")[0];

  render() {
    return ReactDOM.createPortal(
      // Important! Always set the container height explicitly
      <div className="Map" style={{ height: "100vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: apiKey
          }}
          center={this.props.center}
          defaultCenter={this.props.center}
          defaultZoom={13}
        />
      </div>,
      this.el
    );
  }
}

export default Map;
