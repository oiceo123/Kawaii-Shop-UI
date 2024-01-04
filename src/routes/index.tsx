import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
/* import PrivateRoute from "./PrivateRoute"; */
import ProductDetailContainer from "../containers/ProductDetail";

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SignIn} exact />
      <Route path={"/signup"} component={SignUp} exact />
      <Route path={"/detail"} component={ProductDetailContainer} exact />
      {/* <PrivateRoute path="/signup" exact>
          <SignUp />
        </PrivateRoute> */}
    </Switch>
  );
};

export default Router;
