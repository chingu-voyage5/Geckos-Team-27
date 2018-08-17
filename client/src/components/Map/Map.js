import React, { Component } from "react";
import mapboxgl, { Popup } from "mapbox-gl";
import { mapboxKey } from "../../key";
import "./Map.css";
import ReactDOMServer from "react-dom/server";
import CustomMarker from "../UI/Marker/Marker";
import MarkerSummary from "../UI/Marker/MarkerSummary/MarkerSummary";
import DOMPurify from "dompurify";

mapboxgl.accessToken = mapboxKey;

class Map extends Component {
  state = {
    lng: 40.712776,
    lat: -74.005974,
    zoom: 8
  };

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    const { lng, lat } = this.props.newCenter || this.state;
    const { zoom } = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom
    });
    if (this.props.filteredHomes !== null && this.map) {
      this.initMarkers();
    }
  };

  initMarkers = () => {
    const markers = [];
    this.props.filteredHomes.forEach((home, index) => {
      const { lat, lng } = home.location;
      if (!lat || !lng) return null;
      const el = document.createElement("div");

      el.innerHTML = DOMPurify.sanitize(
        ReactDOMServer.renderToString(
          <CustomMarker
            hover={this.props.hover === index}
            price={home.information.price.weekday}
          />
        )
      );
      markers.push(
        new mapboxgl.Marker({ element: el, anchor: "center" })
          .setLngLat([lng, lat])
          .addTo(this.map)
          .setPopup(
            new Popup({
              closeOnClick: true,
              closeButton: false,
              anchor: "bottom",
              className: "MarkerSummary-Container"
            }).setHTML(
              DOMPurify.sanitize(
                ReactDOMServer.renderToString(<MarkerSummary home={home} />)
              )
            )
          )
      );
    });
    this.markers = markers;
  };

  removeMarkers = () => {
    this.markers.forEach(marker => marker.remove());
    this.markers = null;
  };

  componentDidUpdate(prevProps) {
    if (this.props.newCenter) {
      if (prevProps.newCenter.lat !== this.props.newCenter.lat) {
        if (prevProps.newCenter.lng !== this.props.newCenter.lng) {
          const { lng, lat } = this.props.newCenter;
          this.map.setCenter([lng, lat]);
          this.removeMarkers();
          this.initMarkers();
        }
      }
    }
    if (this.props.hover !== prevProps.hover) {
      if (this.markers && this.markers.length > 0) {
        const markers = this.markers;
        if (this.props.hover !== null) {
          markers[this.props.hover].getElement().classList.add("hovered");
        }
        if (this.props.hover === null) {
          if (prevProps.hover !== null) {
            markers[prevProps.hover].getElement().classList.remove("hovered");
          }
        }
      }
    }
  }

  componentWillUnmount() {
    this.removeMarkers();
    this.map.remove();
  }

  render() {
    const style = {
      top: "67px",
      bottom: 0,
      width: "50%",
      height: "85vh"
    };
    return (
      <div className="Map" style={style} ref={el => (this.mapContainer = el)} />
    );
  }
}

export default Map;
