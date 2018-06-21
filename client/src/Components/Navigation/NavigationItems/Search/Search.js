import React, { Component } from "react";
import "./Search.css";
import { withRouter } from "react-router-dom";

class HostButton extends Component {
  searchHandler = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/search",
      search: event.target.search.value
        ? "?query=" + event.target.search.value
        : null
    });
    console.log(event.target.search.value);
  };

  render() {
    return (
      <form action="/search" onSubmit={this.searchHandler} className="Search">
        <i className="fas fa-search" />
        <input
          className="Bar"
          type="text"
          name="search"
          placeholder="Try &quot;Athens&quot;"
        />
      </form>
    );
  }
}

export default withRouter(HostButton);
