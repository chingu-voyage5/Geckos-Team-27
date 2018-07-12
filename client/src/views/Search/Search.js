import React, { Component } from "react";
import axios from "axios";
import { queryToLocation } from "../../utils";

import Loader from "../../components/UI/Loader/Loader";

class Search extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    axios.get("/api/homes").then(homes => {
      console.log(homes.data);
      console.log(queryToLocation(this.props.location.search));
    });
  }

  render() {
    let things = <Loader />;
    if (this.state.data !== null) {
      things = <h1>Here go the results</h1>;
    }
    return (
      //filter bar
      //search results
      things
    );
  }
}

export default Search;
