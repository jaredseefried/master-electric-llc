import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../MainContent/MainContent.css";

export default function MainContent() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 class="main-content-h1">
            Denver Metro Residential and Commercial Electrical Services
          </h1>
        </Col>
      </Row>
    </Container>
  );
}
