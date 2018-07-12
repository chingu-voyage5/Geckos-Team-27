import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import UsersNav from "../../components/Navigation/UsersNav/UsersNav";
import EditProfile from "../../components/EditProfile/EditProfile";
import EditPhotos from "../../components/EditPhotos/EditPhotos";
import ShowProfile from "../../components/ShowProfile/ShowProfile";
import "./Dashboard.css";

const Dashboard = props => {
  const { user } = props.auth;
  console.log("dash props", props);
  return (
    <div className="db-container">
      <UsersNav userId={user._id} />
      <Switch>
        <Route
          path="/dashboard/show/:id"
          render={() => <ShowProfile data={user} />}
        />
        <Route
          path={"/dashboard/edit/" + user._id}
          render={() => <EditProfile data={user} />}
        />
        <Route
          path={"/dashboard/photos/" + user._id}
          render={() => <EditPhotos data={user} />}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
