import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Input from "../../UI/Input/Input";
import { queryToLocation } from "../../../utils";
import "./Search.css";

class Search extends Component {
  searchHandler = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/search",
      search: event.target.search.value
        ? "?query=" + event.target.search.value
        : null
    });
  };

  componentDidMount() {
    let placeholder = 'Try "Athens" or "Miami"';
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
