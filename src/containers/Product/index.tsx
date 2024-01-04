import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux";
import { fetchProductDataAsync } from "../../redux/slices/product/productSlice";

import { Col, Empty } from "antd";
import CardCoverComponent from "../../components/CardCover";

const ProductContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductDataAsync());
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : (
        data.map((product) => (
          <Col span={4} key={product.id}>
            <CardCoverComponent
              style={{
                width: "186px",
                height: "100%",
                borderRadius: 0,
              }}
              id={product.id}
              cover={product.images[0].url}
              title={product.title}
            />
          </Col>
        ))
      )}
    </>
  );
};

export default ProductContainer;
