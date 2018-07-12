import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

import "./Dashboard.css";

import UsersNav from "../../components/Navigation/UsersNav/UsersNav";
import EditProfile from "../../components/EditProfile/EditProfile";
import EditPhotos from "../../components/EditPhotos/EditPhotos";
import ShowProfile from "../../components/ShowProfile/ShowProfile";

class Dashboard extends Component {
  state = {
    canEdit: "5b26b59189ef39209c7365c2", //replace with logged in user's id
    data: null //data from axios
  };
  componentDidMount() {
    //added axios to help me get the data temporarily
    const path = this.props.location.pathname.match(/\w+/gi);
    axios
      .get("/api/user/" + path[2])
      .then(res => {
        const userData = res.data;
        this.setState({ data: userData });
      })
      .catch(err => this.props.history.push("/")); //probably will be replaced with an action that sends the error to an error modal
  }
  render() {
    return (
      <div className="db-container">
        {this.props.location.pathname.match(/\w+/gi)[1] !== "show" ? (
          <UsersNav userId={this.state.canEdit} />
        ) : null}
        {/* routes */}
        <Switch>
          <Route
            path="/users/show/:id"
            render={() => <ShowProfile data={this.state.data} />}
          />
          <Route
            path={"/users/edit/" + this.state.canEdit}
            render={() => <EditProfile data={this.state.data} />}
          />
          <Route
            path={"/users/photos/" + this.state.canEdit}
            render={() => <EditPhotos data={this.state.data} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
