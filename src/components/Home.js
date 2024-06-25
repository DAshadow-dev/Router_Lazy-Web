import { Container,Row ,Col} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container className="my-3">
      <Row>
          <Col>
              <img className="rounded-circle" src="images/menu-01.jpg"></img>
          </Col>
          <Col>
              <img className="rounded-circle" src="images/menu-02.jpg"></img>
          </Col>
          <Col>
              <img className="rounded-circle" src="images/menu-03.jpg"></img>
          </Col>
          <Col>
              <img className="rounded-circle" src="images/menu-04.jpg"></img>
          </Col>
          <Col>
              <img className="rounded-circle" src="images/menu-05.jpg"></img>
          </Col>
          <Col>
              <img className="rounded-circle" src="images/menu-06.jpg"></img>
          </Col>
      </Row>
    </Container>
    <h1 className="text-danger text-bold">This is Home Page</h1>
    </>
  );
};

export default Home;
