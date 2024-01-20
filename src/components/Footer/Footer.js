import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsYelp, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col className="col-12 col-md-4">
            <h3 id="footer-name"> Master Electric, LLC</h3>
            <p id="footer-description">
              Master Electric, LLC provides residential and commercial
              electrical solutions, serving the Denver Metro area.
            </p>
          </Col>
          <Col className="col-12 col-md-4">
            <h3 id="footer-label">Contact</h3>
            <p id="footer-number">720-465-1384</p>
            <p id="footer-email">masterelectricllc@outlook.com</p>
          </Col>
          <Col className="col-12 col-md-4" id="footer-social-icons-container">
            <BsInstagram className="footer-social-icons" />
            <BsLinkedin className="footer-social-icons" />
            <BsYelp className="footer-social-icons" />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
