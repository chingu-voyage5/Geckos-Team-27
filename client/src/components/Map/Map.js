import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import GoogleMapReact from "google-map-react";
import { apiKey } from "../../key";

import "./Map.css";

import ToggleSwitch from "react-toggle-switch";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    const toggle = (
      <div key="map-toggle" className="Map-Toggle">
        <small>Show map</small>
        <Fragment>
          <ToggleSwitch onClick={this.props.toggleMap} on={this.props.showMap}>
            <i
              className={
                "fas " + (this.props.showMap ? "fa-check" : "fa-times")
              }
            />
          </ToggleSwitch>
        </Fragment>
      </div>
    );
    const map = (
      <div key="map" className="Map" style={{ height: "85vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: apiKey
          }}
          center={this.props.center}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    );
    return [
      this.props.el && ReactDOM.createPortal(toggle, this.props.el),
      this.props.showMap && map
    ];
  }
}

export default Map;
