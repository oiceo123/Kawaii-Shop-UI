import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { Navbar } from "../containers/Navbar";
import { Home } from "../containers/Home";
import ThailandIcon from "../assets/svg/ThailandIcon";
import AmericanIcon from "../assets/svg/AmericanIcon";

const items: MenuProps["items"] = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "home",
  },
];

const options = [
  {
    value: "Thai",
    label: (
      <>
        <ThailandIcon
          style={{ width: "20px", marginRight: "5px" }}
        />
        <span>ไทย</span>
      </>
    ),
  },
  {
    value: "English",
    label: (
      <>
        <AmericanIcon
          style={{ width: "18px", marginRight: "5px" }}
        />
        <span>English</span>
      </>
    ),
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar items={items} options={options} />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
