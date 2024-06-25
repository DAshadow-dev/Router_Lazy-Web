import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center text-bold text-danger">About Us</h1>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <img src='images/event-7.jpg' className='rounded-5'></img>
        </Col>
        <Col md={6}>
          <Card className="border-0">
            <Card.Body>
              <Card.Text className='fs-5'>
                Welcome to our website!!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Our Team</h2>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <img src='images/menu-06.jpg' className="rounded-circle"></img>
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>CEO & Founder</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <img src='images/menu-06.jpg' className="rounded-circle"></img>
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>COO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <img src='images/menu-06.jpg' className="rounded-circle"></img>
            <Card.Body>
              <Card.Title>Emily Johnson</Card.Title>
              <Card.Text>CTO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
