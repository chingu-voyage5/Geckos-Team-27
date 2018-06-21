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

  componentDidMount() {
    let placeholder = 'Try "Athens"';
    if (this.props.location.search) {
      placeholder = this.props.location.search.replace("?query=", "");
    }
    document.querySelector(".Search .Bar").placeholder = placeholder;
  }

  render() {
    return (
      <form
        action="/search"
        onSubmit={this.searchHandler}
        className={
          this.props.formClasses ? "Search " + this.props.formClasses : "Search"
        }
      >
        <i className="fas fa-search Search-Icon" />
        <input className="Bar" type="text" name="search" />
        {this.props.children}
      </form>
    );
  }
}

export default withRouter(HostButton);
