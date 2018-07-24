import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AuthRoute from "./hoc/AuthRoute/AuthRoute";
import Layout from "./hoc/Layout/Layout";
import Home from "./views/Home/Home";
import Search from "./views/Search/Search";
import Dashboard from "./views/Dashboard/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <AuthRoute path="/dashboard" {...this.props} component={Dashboard} />
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
