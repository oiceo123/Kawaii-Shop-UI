import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../redux";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
