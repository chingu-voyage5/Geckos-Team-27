import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllHomesRequest } from "../../redux/actions/index";
import Header from "../../components/Header/Header";
import Carousel from "../../components/UI/Carousel/Carousel/Carousel";

class Home extends Component {
  static propTypes = {
    fetchAllHomesRequest: PropTypes.func.isRequired,
    homes: PropTypes.object.isRequired
  };
  state = {
    listings: []
  };
  componentDidMount() {
    this.props.fetchAllHomesRequest();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.homes !== prevProps.homes) {
      this.addListings();
    }
  }
  addListings = () => {
    const { homes } = this.props.homes;
    const allListings = Object.keys(homes).map(listing => homes[listing]);
    const showListings = allListings.slice(0, 6);
    this.setState({ listings: showListings });
  };
  render() {
    const { listings } = this.state;
    return (
      <Fragment>
        <Header />
        {listings.length > 0 && (
          <div className="flex-center">
            <Carousel listings={listings} />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  homes: state.homes
});

export default connect(
  mapStateToProps,
  { fetchAllHomesRequest }
)(Home);
