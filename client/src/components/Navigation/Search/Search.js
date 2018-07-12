import React, { Component } from "react";
import "./Search.css";
import { withRouter } from "react-router-dom";
import { queryToLocation } from "../../../utils";

import Input from "../../UI/Input/Input";

class Search extends Component {
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

  componentDidMount() {
    let placeholder = 'Try "Athens"';
    if (this.props.location.search) {
      placeholder = queryToLocation(this.props.location.search);
    }
    document.querySelector(".Search .Search-Bar").placeholder = placeholder;
  }

  render() {
    return (
      <form
        onSubmit={this.searchHandler}
        className={
          this.props.formClasses
            ? "Search Icon-left " + this.props.formClasses
            : "Search Icon-left"
        }
      >
        <Input inputClasses="Search-Bar" name="search">
          <i className="fas fa-search Input-Icon" />
          {this.props.children}
        </Input>
      </form>
    );
  }
}

export default withRouter(Search);
