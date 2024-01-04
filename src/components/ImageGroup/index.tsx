import React, { useState } from "react";
import "./ImageGroup.scss";
import { Image } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const images = [
  "https://cdn.pixabay.com/photo/2023/12/06/08/41/mountain-8433234_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/20/07/04/clouds-8459053_640.jpg",
  "https://cdn.pixabay.com/photo/2023/12/01/05/32/butterfly-8422900_640.jpg",
  "https://cdn.pixabay.com/photo/2023/11/27/04/59/vegetables-8414652_640.jpg",
  "https://cdn.pixabay.com/photo/2023/12/30/12/57/spider-8478079_640.jpg",
  "https://cdn.pixabay.com/photo/2023/12/30/17/39/green-lily-8478514_640.jpg",
  "https://cdn.pixabay.com/photo/2023/09/22/18/39/bear-8269620_640.jpg",
  "https://cdn.pixabay.com/photo/2023/08/25/16/13/skyscraper-8213318_640.jpg",
  // เพิ่มรูปต่อไปตามต้องการ
];

const ImageGroupComponent = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [mainIndex, setMainIndex] = useState(0);

  const handleNextClick = () => {
    let nextIndex = startIndex + 1;
    if (nextIndex > images.length - 5) {
      nextIndex = nextIndex - 1;
    }
    setStartIndex(nextIndex);
  };

  const handlePrevClick = () => {
    let prevIndex = startIndex - 1;
    if (prevIndex < 0) {
      prevIndex = 0;
    }
    setStartIndex(prevIndex);
  };

  const handleSelect = (index: number) => {
    setMainIndex(index);
  };

  return (
    <div className="web-image-group-container">
      <div className="web-image-group-image-main-container">
        <Image src={images[mainIndex]} />
      </div>
      <div className="web-image-group-image-gallery-container">
        <LeftOutlined onClick={handlePrevClick} className="web-image-group-button-previous" />
        <div className="web-image-group-image-gallery">
          {images.slice(startIndex, startIndex + 5).map((image, index) => (
            <img
              key={index}
              src={image}
              className={
                mainIndex === index + startIndex ? "web-image-group-image-selected" : ""
              }
              onClick={() => handleSelect(index + startIndex)}
            />
          ))}
        </div>
        <RightOutlined onClick={handleNextClick} className="web-image-group-button-next" />
      </div>
    </div>
  );
};

export default ImageGroupComponent;
