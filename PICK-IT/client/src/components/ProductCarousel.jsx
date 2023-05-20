import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

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
          <h3>Tú eres el procesador de tu propio destino</h3>
          <p>¡Optimízate y alcanza tu máximo potencial!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: "600px"}}>
        <img
          className="d-block w-100"
          src="../assets/red-parts.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Se una tarjeta gráfica</h3>
          <p>Así como una tarjeta gráfica potente despliega imágenes asombrosas, tú tienes el poder de crear una vida llena de colores y experiencias increíbles.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: "600px"}}>
        <img
          className="d-block w-100"
          src="../assets/white-parts.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Almacena más que una memoria RAM</h3>
          <p>Al igual que una memoria RAM, expande tus límites y capacidad de almacenar conocimiento. Nunca dejes de aprender y crecer.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;