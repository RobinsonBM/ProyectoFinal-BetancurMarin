import { Carousel } from "react-bootstrap";
import "../../styles/components/home/Banner.scss";
const banner1 = require("../../assets/img/186546303_1222315854851160_1129667025496812096_n.jpg");
const banner2 = require("../../assets/img/corredor.jpg");

const Banner = ({ title, nota }) => {
  return (
    <div className="banner">
      <div className="opacity d-flex flex-column justify-content-center align-items-center">
        <h1>{title}</h1>
        <q>{nota}</q>
      </div>
      <Carousel className="carousel">
        <Carousel.Item>
          <img src={banner1} className="d-block w-100" alt="Asados la 44" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={banner2}
            className="d-block w-100"
            alt="Pasaje comercial parque de sabaneta, Corredor Restaurante la 44"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Banner;
