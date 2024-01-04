import { Row, Col } from "antd";
import "./ProductDetail.scss";
import ImageGroupComponent from "../../components/ImageGroup";
import ProductDetailComponent from "../../components/ProductDetail";

const ProductDetailContainer = () => {
  return (
    <Row justify="center">
      <Col span={21}>
        <Row className="web-containers-productDetail-image-container">
          <Col span={10} className="web-container-productDetail-col-image">
            <ImageGroupComponent />
          </Col>
          <Col span={14} className="web-container-productDetail-col-detail">
            <ProductDetailComponent />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductDetailContainer;
