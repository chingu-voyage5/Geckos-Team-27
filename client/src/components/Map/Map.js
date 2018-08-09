import React, { Component } from "react";
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

  render() {
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
    return [this.props.showMap && map];
  }
}

export default Map;
