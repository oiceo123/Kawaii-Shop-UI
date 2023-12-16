import React from "react";
import { Col, Row, Input, Button } from "antd";
import { MenuBar } from "../../components/MenuBar";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { SelectItem } from "../../components/Select";

interface Props {
  items: MenuProps["items"];
  options: { value: string; label: string | React.JSX.Element }[] | undefined;
}

const NavbarContainer: React.FC<Props> = ({ items, options }) => {
  return (
    <>
      <Row style={{ height: "64px"/* , boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 10px' */ }}>
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
            <SelectItem options={options} />
          </div>
          <div>
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
          </div>
        </Col>
      </Row>
    </>
  );
};

export const Navbar = NavbarContainer;
