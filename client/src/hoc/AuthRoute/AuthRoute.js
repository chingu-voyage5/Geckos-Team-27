import React from "react";
import { Route, Redirect } from "react-router-dom";

const checkAuth = props => {
  const isAuth = props.auth.isAuthenticated;
  return isAuth ? true : false;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth(rest) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

export default AuthRoute;
