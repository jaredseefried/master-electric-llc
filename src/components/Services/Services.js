import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../Services/Services.css";
import CardImage from "../../images/main.png";

export default function Services() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 class="main-content-h1">
              Denver Metro Residential and Commercial Electrical Services
            </h1>
          </Col>
        </Row>
      </Container>
      <Container className="services-container">
        <Row>
          <Col>
            <Card
              className="shadow services-card-style"
              style={{ width: "24rem" }}
            >
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="shadow mb-5 services-card-style"
              style={{ width: "24rem" }}
            >
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="shadow mb-5 services-card-style"
              style={{ width: "24rem" }}
            >
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
