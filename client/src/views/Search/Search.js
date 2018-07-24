import React, { Component, Fragment } from "react";
import { queryToLocation } from "../../utils";
import { connect } from "react-redux";

import Listings from "../../components/Listings/Listings";
import Filters from "../../components/Filters/Filters";

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
        //initial value is null, if the user changes it
        //it becomes true/false
        entirePlace: null,
        privateRoom: null,
        sharedRoom: null
      },
      price: {
        min: 9,
        max: 500
      },
      dates: {}
    },
    location: null,
    showMap: false
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
    console.log(data);
    let filteredHomes = data.filter(
      home =>
        home.location.city.toLowerCase().includes(location.toLowerCase()) ||
        home.location.state.toLowerCase().includes(location.toLowerCase())
    ); // filter for location
    console.log(filteredHomes);

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
    this.setState({ filteredHomes, location });
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

  render() {
    return (
      <Fragment>
        <Filters
          guestController={this.guestController}
          homeTypeToggler={this.homeTypeToggler}
          rangeController={this.rangeController}
          apply={this.filterHomes}
          filters={this.state.filters}
        />
        <Listings data={this.state.filteredHomes} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  homes: state.homes.homes
});

export default connect(mapStateToProps)(Search);
