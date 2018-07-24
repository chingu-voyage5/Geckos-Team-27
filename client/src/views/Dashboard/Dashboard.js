import React, { Fragment } from "react";
import { connect } from "react-redux";
import DashNav from "../../components/Navigation/DashNav/DashNav";
import Toggle from "../../hoc/Toggle/Toggle";
import EditProfile from "../../components/EditProfile/EditProfile";
import EditPhotos from "../../components/EditPhotos/EditPhotos";
import ShowProfile from "../../components/ShowProfile/ShowProfile";
import "./Dashboard.css";

const Dashboard = props => {
  const { user } = props.auth;
  return (
    <div className="db-container">
      <Toggle>
        {({ toggleActive, active }) => (
          <Fragment>
            <DashNav active={active} onClick={toggleActive} />
            {active === "edit profile" && <EditProfile data={user} />}
            {active === "choose an avatar" && <EditPhotos data={user} />}
            {active === "show profile" && <ShowProfile data={user} />}
          </Fragment>
        )}
      </Toggle>
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
