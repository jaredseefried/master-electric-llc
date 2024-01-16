import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsYelp, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col>
            <h1> Corey Divis</h1>
          </Col>
          <Col>
            <h2>720-339-5614</h2>
          </Col>
          <Col>
            <BsFacebook className="social-icons" />
            <BsInstagram className="social-icons" />
            <BsLinkedin className="social-icons" />
            <BsYelp className="social-icons" />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
