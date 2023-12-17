import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "../containers/Navbar";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
