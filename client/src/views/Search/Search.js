import React, { Component, Fragment } from "react";
import { queryToLocation } from "../../utils";
import { connect } from "react-redux";
import Filters from "../../components/Filters/Filters";
import Loader from "../../components/UI/Loader/Loader";
import Listing from "../../components/UI/Listing/Listing";
import "./Search.css";
import { returnFilters } from "../../utils";
import axios from "axios";
import { apiKey } from "../../key";
import Map from "../../components/Map/Map";
import Marker from "../../components/UI/Marker/Marker";

class Search extends Component {
  state = {
    filteredHomes: null,
    filters: {
      guests: {
        adults: 1,
        children: 0,
        infants: 0
      },
      homeType: {
        entirePlace: null,
        privateRoom: null,
        sharedRoom: null
      },
      price: {
        min: 9,
        max: 500
      }
    },
    location: null,
    showMap: false,
    mapCenter: null
  };

  guestController = (operation, guestType) => {
    const newFilters = { ...this.state.filters };
    if (operation === "inc") {
      newFilters.guests[guestType]++;
    } else if (operation === "dec") {
      if (newFilters.guests[guestType] > 0) {
        if (guestType === "adults" && newFilters.adults > 1) {
          newFilters.guests[guestType]--;
        }
        newFilters.guests[guestType]--;
      }
    }
    this.setState({ filters: newFilters });
  };

  homeTypeToggler = type => {
    const newFilters = { ...this.state.filters };
    newFilters.homeType[type] = !newFilters.homeType[type];
    this.setState({ filters: newFilters });
  };

  rangeController = values => {
    const newFilters = { ...this.state.filters };
    const [min, max] = [values.min, values.max];
    newFilters.price.min = min;
    newFilters.price.max = max;
    this.setState({ filters: newFilters });
  };

  filterHomes = () => {
    const data = Object.values(this.props.homes);
    const filters = this.state.filters;
    const location = queryToLocation(this.props.location.search);
    let filteredHomes = data.filter(
      home =>
        home.location.city.toLowerCase().includes(location.toLowerCase()) ||
        home.location.state.toLowerCase().includes(location.toLowerCase())
    ); // filter for location

    filteredHomes = filteredHomes.filter(
      home =>
        home.information.guestLimit >=
        Object.values(filters.guests).reduce((a, b) => a + b)
    ); // filter for guests

    filteredHomes = filteredHomes.filter(
      home =>
        home.information.price.weekday <= filters.price.max &&
        home.information.price.weekday >= filters.price.min
    ); //filter for price
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`
      )
      .then(res => {
        const mapCenter = res.data.results[0].geometry.location;
        this.setState({ filteredHomes, location, mapCenter });
      }); //get new map center
  };

  resetFilters = type => {
    const newFilters = { ...this.state.filters };
    newFilters[type] = returnFilters(type);
    this.setState({ filters: newFilters }, this.filterHomes);
  };

  componentDidMount() {
    console.log(this.props);
    this.filterHomes();
  }
  componentDidUpdate() {
    console.log(this.state.filteredHomes);
    if (this.state.location !== queryToLocation(this.props.location.search)) {
      this.filterHomes();
    }
  }

  getMarkers = homes => {
    return homes.map((home, index) => {
      const { lat, lng } = home.location;
      if (!lat || !lng) return null;
      return (
        <Marker
          price={home.information.price.weekday}
          key={`marker-${index}`}
          lat={lat}
          lng={lng}
        />
      );
    });
  };

  renderListings = homes => {
    let listings = <Loader />;
    if (homes !== null) {
      if (homes.length === 0) {
        listings = <h1>No results</h1>;
      } else {
        listings = Object.values(homes).map((listing, idx) => {
          return <Listing listingData={listing} key={`listing-${idx}`} />;
        });
      }
    }
    return listings;
  };

  toggleMap = () => {
    this.setState(() => ({ showMap: !this.state.showMap }));
  };

  render() {
    const { filteredHomes } = this.state;

    let markers = null;
    if (filteredHomes !== null) {
      markers = this.getMarkers(filteredHomes);
    }
    console.log(markers);
    return (
      <Fragment>
        <Filters
          guestController={this.guestController}
          homeTypeToggler={this.homeTypeToggler}
          rangeController={this.rangeController}
          apply={this.filterHomes}
          reset={this.resetFilters}
          filters={this.state.filters}
          showMap={this.state.showMap}
          toggleMap={this.toggleMap}
        />
        <div className="Listings">
          <div className="Listings-Results">
            {this.renderListings(filteredHomes)}
          </div>
          <Map
            center={this.state.mapCenter}
            showMap={this.state.showMap}
            toggleMap={this.toggleMap}
            el={document.getElementsByClassName("Filters")[0]}
          >
            {markers}
          </Map>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  homes: state.homes.homes
});

export default connect(mapStateToProps)(Search);
