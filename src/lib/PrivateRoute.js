import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import MaterialSidemenu from "../MaterialSidemenu.js";

const PrivateRoute = ({ component, ...rest }) => {
//   const { currentUser, loading } = useContext(AuthContext);
      return (
        <>
          <MaterialSidemenu />
          <Route component={component} {...rest} />;
        </>
      );
};

export default PrivateRoute;