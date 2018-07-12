import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./hoc/Layout/Layout";
import Home from "./views/Home/Home";
import Users from "./views/Users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
