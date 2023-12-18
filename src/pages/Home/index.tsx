import "./Home.css";
import { Col, Row } from "antd";
import CarouselComponent from "../../components/Carousel";
import CardGridComponent from "../../components/CardGrid";
import CardCoverComponent from "../../components/CardCover";

const Home: React.FC = () => {
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
          <CardGridComponent
            title="หมวดหมู่"
            bordered={true}
            style={{ width: "10%", height: "151px", textAlign: "center" }}
          />
        </Col>
      </Row>
      <Row justify={"center"} style={{ marginTop: "24px" }}>
        <Col span={21}>
          <Row className="web-home-row-1cbcbe25">
            <Col span={24}>
              <h3>สินค้าแนะนำ</h3>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
            <Col span={4}>
              <CardCoverComponent
                style={{ width: "186px", borderRadius: 0 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ borderRadius: 0 }}
                  />
                }
                title="Europe Street beat"
              />
            </Col>
            <Col span={4}>
              <CardCoverComponent
                style={{ width: "186px", borderRadius: 0 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ borderRadius: 0 }}
                  />
                }
                title="Europe Street beat"
              />
            </Col>
            <Col span={4}>
              <CardCoverComponent
                style={{ width: "186px", borderRadius: 0 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ borderRadius: 0 }}
                  />
                }
                title="Europe Street beat"
              />
            </Col>
            <Col span={4}>
              <CardCoverComponent
                style={{ width: "186px", borderRadius: 0 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ borderRadius: 0 }}
                  />
                }
                title="Europe Street beat"
              />
            </Col>
            <Col span={4}>
              <CardCoverComponent
                style={{ width: "186px", borderRadius: 0 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ borderRadius: 0 }}
                  />
                }
                title="Europe Street beat"
              />
            </Col>
            <Col span={4}>
              <CardCoverComponent
                style={{ width: "186px", borderRadius: 0 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ borderRadius: 0 }}
                  />
                }
                title="Europe Street beat"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
