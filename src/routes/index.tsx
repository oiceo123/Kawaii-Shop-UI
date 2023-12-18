import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarContainer from "../containers/Navbar";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarContainer />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
