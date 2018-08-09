import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import Filters from "../../components/Filters/Filters";
import Loader from "../../components/UI/Loader/Loader";
import Listing from "../../components/UI/Listing/Listing";
import Map from "../../components/Map/Map";
import ToggleMap from "../../components/Map/ToggleMap";
import Marker from "../../components/UI/Marker/Marker";
import { queryToLocation, returnFilters } from "../../utils";
import { apiKey } from "../../key";
import "./Search.css";

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
    mapCenter: null,
    error_message: null
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
    this.setState({ filteredHomes });
  };

  resetFilters = type => {
    const newFilters = { ...this.state.filters };
    newFilters[type] = returnFilters(type);
    this.setState({ filters: newFilters }, this.filterHomes);
  };

  componentDidMount() {
    this.filterHomes();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      queryToLocation(prevProps.location.search) !==
      queryToLocation(this.props.location.search)
    ) {
      this.filterHomes();
      const { showMap } = this.state;
      showMap ? this.getMap() : this.clearMap();
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

  toggleMap = async () => {
    await this.setState(() => ({ showMap: !this.state.showMap }));
    const { showMap } = this.state;
    showMap ? this.getMap() : this.clearMap();
  };

  clearMap = () => {
    this.setState({
      location: null,
      mapCenter: null,
      error_message: null
    });
  };

  getMap = () => {
    const location = queryToLocation(this.props.location.search);
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`
      )
      .then(res => {
        const error = res.data.error_message;
        if (error) {
          this.setState({ error_message: error });
        } else {
          const mapCenter = res.data.results[0].geometry.location;
          this.setState({ location, mapCenter });
        }
      }); //get new map center
  };

  render() {
    const { filteredHomes, error_message } = this.state;
    let markers = null;
    if (filteredHomes !== null) {
      markers = this.getMarkers(filteredHomes);
    }
    const mapBtnPortal = document.getElementsByClassName("Filters")[0];
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
          {mapBtnPortal &&
            ReactDOM.createPortal(
              <ToggleMap
                toggleMap={this.toggleMap}
                showMap={this.state.showMap}
              />,
              mapBtnPortal
            )}
          {!error_message && <Map center={this.state.mapCenter}>{markers}</Map>}
          {error_message && (
            <div className="half-width">
              <h5 className="flex-center map-error">
                There is an issue with google maps
              </h5>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  homes: state.homes.homes
});

export default connect(mapStateToProps)(Search);
