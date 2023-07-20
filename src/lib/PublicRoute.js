import { Route } from "react-router-dom";

const PublicRoute = ({ component, ...rest }) => {
  return (
    <>
      {/* <Route component={component} {...rest} />; */}
      <Route path={rest.path} element={<component />} />
      {/* <Route path="/home" element={<Home />} /> */}
    </>
  );
};

export default PublicRoute;