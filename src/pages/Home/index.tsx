import "./Home.scss";
import { useTranslation } from "react-i18next";

import { Col, Row } from "antd";
import CarouselComponent from "../../components/Carousel";
import ProductContainer from "../../containers/Product";
import CategoryContainer from "../../containers/Category";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Row justify={"center"}>
        <Col span={21}>
          <CarouselComponent
            autoplay={true}
            style={{
              margin: "0",
              height: "300px",
              color: "#fff",
              lineHeight: "300px",
              textAlign: "center",
              background: "#364d79",
            }}
          />
        </Col>
      </Row>
      <Row justify={"center"} style={{ marginTop: "24px" }}>
        <Col span={21}>
          <CategoryContainer />
        </Col>
      </Row>
      <Row justify={"center"} style={{ marginTop: "24px", marginBottom: "30px" }}>
        <Col span={21}>
          <Row className="web-home-row-1cbcbe25">
            <Col span={24}>
              <h3>{t("page.header.home.title.recommended.products")}</h3>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
            <ProductContainer />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
