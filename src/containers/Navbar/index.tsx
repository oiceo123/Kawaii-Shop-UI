import React from "react";
import { Col, Row, Input, Button } from "antd";
/* import { MenuBar } from "../../components/MenuBar";
import type { MenuProps } from "antd"; */
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import SelectComponent from "../../components/Select";
import ThailandIcon from "../../assets/svg/ThailandIcon";
import AmericanIcon from "../../assets/svg/AmericanIcon";

/* const items: MenuProps["items"] = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "home",
  },
]; */

const options = [
  {
    value: "Thai",
    label: (
      <>
        <ThailandIcon style={{ width: "20px", marginRight: "5px" }} />
        <span>ไทย</span>
      </>
    ),
  },
  {
    value: "English",
    label: (
      <>
        <AmericanIcon style={{ width: "18px", marginRight: "5px" }} />
        <span>English</span>
      </>
    ),
  },
];

const NavbarContainer: React.FC = () => {
  return (
    <>
      <Row className="web-navbar-row-e779b166">
        <Col span={3} className="web-navbar-col-06d3241b">
          <Link to={"/"}>
            <img
              src={logo}
              style={{ width: "100%", height: "100%", marginTop: "4px" }}
            />
          </Link>
        </Col>
        <Col span={16} className="web-navbar-col-06d3241b">
          <Input
            size="large"
            style={{
              borderLeft: "1px solid #e6e6e6",
              borderRadius: "0",
              width: "80%",
            }}
            bordered={false}
            placeholder="Enter your username"
            prefix={<SearchOutlined style={{ color: "#C2C2C2" }} />}
          />
        </Col>
        <Col span={5} className="web-navbar-col-72ce1cb0">
          {/* <div>
            <MenuBar items={items} />
          </div> */}
          <div>
            <SelectComponent
              size="large"
              bordered={false}
              defaultValue="Thai"
              style={{ width: 120 }}
              options={options}
            />
          </div>
          <Link to="/signin">
            <Button
              style={{ borderColor: "#e6e6e6" }}
              icon={
                <UserOutlined
                  style={{
                    border: "1px solid #e6e6e6",
                    borderRadius: "50%",
                    fontSize: "18px",
                  }}
                />
              }
              size="large"
            >
              Sign in
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default NavbarContainer;
