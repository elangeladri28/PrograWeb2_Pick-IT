import { CCarousel, CCarouselItem, CImage} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
import { height } from "@mui/system";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item style={{height: "600px"}}>
        <img
          className="d-block w-100"
          src="../assets/pc-parts.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: "600px"}}>
        <img
          className="d-block w-100"
          src="../assets/red-parts.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: "600px"}}>
        <img
          className="d-block w-100"
          src="../assets/white-parts.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;