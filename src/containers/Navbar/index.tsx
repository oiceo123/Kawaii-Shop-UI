import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../redux";
/* import { useHistory } from "react-router-dom"; */

import "./Navbar.scss";
import { Col, Row, Input, Button, MenuProps } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../assets/png/logo.png";
import ThailandIcon from "../../assets/svg/ThailandIcon";
import AmericanIcon from "../../assets/svg/AmericanIcon";
import SelectComponent from "../../components/Select";
import AvatarDropdownComponent from "../../components/AvatarDropdown";
import SignOutContainer from "../SignOut";

const NavbarContainer: React.FC = () => {
  const defaultValue = useRef(localStorage.getItem("i18nextLng"));
  const { t, i18n } = useTranslation();
  const { user } = useAppSelector((state) => state.auth);
  /* const history = useHistory(); */

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
    /* history.go(0); */
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <SignOutContainer />,
    },
  ];

  const options = [
    {
      value: "th",
      label: (
        <>
          <ThailandIcon style={{ width: "20px", marginRight: "5px" }} />
          <span>ไทย</span>
        </>
      ),
    },
    {
      value: "en",
      label: (
        <>
          <AmericanIcon style={{ width: "18px", marginRight: "5px" }} />
          <span>English</span>
        </>
      ),
    },
  ];

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
            placeholder={t("navbar.input.search.placeholder")}
            prefix={<SearchOutlined style={{ color: "#C2C2C2" }} />}
          />
        </Col>
        <Col span={5} className="web-navbar-col-72ce1cb0">
          <div>
            <SelectComponent
              size="large"
              bordered={false}
              defaultValue={defaultValue.current || "en"}
              style={{ width: 120 }}
              options={options}
              onChange={handleChange}
            />
          </div>
          {user ? (
            <AvatarDropdownComponent
              size={40}
              icon={<UserOutlined />}
              placement="bottomRight"
              items={items}
            />
          ) : (
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
                {t("navbar.button.login")}
              </Button>
            </Link>
          )}
        </Col>
      </Row>
    </>
  );
};

export default NavbarContainer;
