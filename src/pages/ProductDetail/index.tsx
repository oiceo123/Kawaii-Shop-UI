import { useState, useEffect } from "react";
import axios from "../../api";
import { useTranslation } from "react-i18next";
import { useParams, useHistory } from "react-router-dom";
import { Product } from "../../redux/slices/product/types";

import Swal from "sweetalert2";
import { Row, Col, Card } from "antd";
import "./ProductDetail.scss";
import ImageGroupComponent from "../../components/ImageGroup";
import ProductDetailComponent from "../../components/ProductDetail";

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();
  const { t } = useTranslation();

  const { id }: { id: string } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchProduct(id);
  }, []);

  const fetchProduct = async (id: string) => {
    try {
      const res = await axios.get(`/products/${id}`);
      if (res.data) {
        setProduct(res.data);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: t("message.error.internal.server.error"),
      });
      history.replace("/");
    }
  };

  return (
    <Row justify="center">
      {console.log("product", product)}
      <Col span={21}>
        <Row className="web-pages-productDetail-image-container">
          <Col span={10} className="web-pages-productDetail-col-image">
            <ImageGroupComponent
              images={product?.images.map((image) => image.url) || []}
            />
          </Col>
          <Col span={14} className="web-pages-productDetail-col-detail">
            <ProductDetailComponent
              title={product?.title || ""}
              price={product?.price || 9999999}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Card
              title={t("page.body.product-detail.description")}
              className="web-pages-productDetail-description-container"
            >
              {product?.description}
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductDetail;
