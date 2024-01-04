import React from "react";
import { useTranslation } from "react-i18next";

import "./ProductDetail.scss";
import { Row, Col, Flex, InputNumber, Button } from "antd";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const ProductDetailComponent = () => {
  const { t } = useTranslation();
  return (
    <Flex
      className="web-components-productDetail-container "
      justify="space-between"
      vertical
    >
      <div>
        <Row>
          <Col span={24} className="web-components-productDetail-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            aliquid! Odit dolore laboriosam quidem. Nemo iste animi ipsam
            quisquam? Accusamus.
          </Col>
        </Row>
        <Row className="web-components-productDetail-row">
          <Col span={5} className="web-components-productDetail-star">
            <span
              className="web-components-productDetail-font-green"
              style={{ marginRight: "8px" }}
            >
              0.0
            </span>
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
          </Col>
          <Col span={6} className="web-components-productDetail-rating">
            <span>0 </span>
            <span className="web-components-productDetail-font-gray">
              {t("page_body_product_detail", { context: "rating", count: 3 })}
            </span>
          </Col>
          <Col span={5} className="web-components-productDetail-sold">
            <span>0 </span>
            <span className="web-components-productDetail-font-gray">
              {t("page.body.product-detail.sold")}
            </span>
          </Col>
        </Row>
        <Row className="web-components-productDetail-row">
          <Col span={24} className="web-components-productDetail-price">
            &#3647; 499
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col span={24}>
            <Row align="middle">
              <Col
                span={4}
                className="web-components-productDetail-quantity web-components-productDetail-font-gray"
              >
                {t("page.body.product-detail.quatity")}
              </Col>
              <Col span={4} className="web-components-productDetail-quantity">
                <InputNumber
                  controls={false}
                  addonBefore="-"
                  addonAfter="+"
                  defaultValue={1}
                  min={1}
                  max={100}
                />
              </Col>
              <Col
                span={13}
                style={{ paddingLeft: "24px" }}
                className="web-components-productDetail-quantity web-components-productDetail-font-gray"
              >
                {t("page.body.product.detail.remaining.product")} 2{" "}
                {t("page_body_product_detail", { context: "item", count: 2 })}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col span={24} className="web-components-productDetail-button-group">
            <Button
              icon={<ShoppingCartOutlined style={{ fontSize: "1.25rem" }} />}
              className="web-components-productDetail-button-cart"
            >
              {t("page.body.product-detail.button.cart")}
            </Button>
            <Button className="web-components-productDetail-button-buy">
              {t("page.body.product-detail.button.buy")}
            </Button>
          </Col>
        </Row>
      </div>
    </Flex>
  );
};

export default ProductDetailComponent;
