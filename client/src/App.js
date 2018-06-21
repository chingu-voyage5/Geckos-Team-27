import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return <Layout>{/* here will go the routes */}</Layout>;
  }
}

export default App;
