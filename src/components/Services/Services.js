import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import CardImage from "../../images/main.png";

export default function Services() {
  return (
    <>
      <Container className="main-header-line">
        <Row>
          <Col>
            <h1 class="main-content-h1">
              Denver Metro Residential and Commercial Electrical Services
            </h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>
              At Master Electric, we are committed to illuminating your world
              with excellence. Rooted in unwavering integrity, we pledge to
              deliver unparalleled electrical solutions for both commercial and
              residential needs. By upholding the highest ethical standards, we
              illuminate your path with quality, value, and exceptional service.
              Our mission is to empower your spaces, ensuring safety,
              efficiency, and innovation in every connection we make. At Master
              Electric, we don't just provide electrical services; we create
              bright and enduring partnerships that light up the future.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="services-container">
        <Row>
          <Col>
            <Card
              className="shadow services-card-style"
              style={{ width: "24rem", height: "36rem" }}
            >
              <Card.Img variant="top" src={CardImage} />
              <Card.Body className="card-body-style">
                <Card.Title className="card-body-title">
                  Diverse Expertise
                </Card.Title>
                <Card.Subtitle className="card-body-subtitle mb-2 text-muted">
                  20 Years of Experience
                </Card.Subtitle>
                <Card.Text className="card-body-text">
                  With over two decades of experience, we offer a comprehensive
                  range of electrical services, covering everything from
                  lighting control systems to panel upgrades, ensuring that all
                  your electrical needs are met under one roof.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="shadow mb-5 services-card-style"
              style={{ width: "24rem", height: "36rem" }}
            >
              <Card.Img variant="top" src={CardImage} />
              <Card.Body className="card-body-style">
                <Card.Title className="card-body-title">
                  How I Can Help
                </Card.Title>
                <Card.Subtitle className="card-body-subtitle mb-2 text-muted">
                  Comprehensive Solutions
                </Card.Subtitle>
                <Card.Text className="card-body-text">
                  We understand that every project is unique. Our team
                  specializes in tailoring electrical solutions to meet the
                  specific requirements of each client, providing customized and
                  efficient services for residential and commercial spaces.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="shadow mb-5 services-card-style"
              style={{ width: "24rem", height: "36rem" }}
            >
              <Card.Img variant="top" src={CardImage} />
              <Card.Body className="card-body-style">
                <Card.Title className="card-body-title">
                  Certified and Licensed
                </Card.Title>
                <Card.Subtitle className="card-body-subtitle mb-2 text-muted">
                  Your safety is our priority.
                </Card.Subtitle>
                <Card.Text className="card-body-text">
                  Our team is NFPA 70E certified and holds OSHA 30 and OSHA 10
                  certifications, ensuring that all electrical work is conducted
                  with the highest safety standards. We provide comprehensive
                  solutions that not only meet your needs but also adhere to
                  industry regulations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
