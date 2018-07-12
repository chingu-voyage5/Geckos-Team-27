//library imports
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

//component imports
import Layout from "./hoc/Layout/Layout";
import Home from "./views/Home/Home";
import Users from "./views/Users/Users";

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

export default App;
