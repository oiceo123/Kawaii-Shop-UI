import { Carousel } from "antd";

interface CarouselProps {
  autoplay: boolean;
  style: React.CSSProperties;
}

const CarouselComponent: React.FC<CarouselProps> = (props) => {
  const { autoplay, style } = props;

  return (
    <Carousel autoplay={autoplay}>
      <div>
        <h3 style={style}>1</h3>
      </div>
      <div>
        <h3 style={style}>2</h3>
      </div>
      <div>
        <h3 style={style}>3</h3>
      </div>
      <div>
        <h3 style={style}>4</h3>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
