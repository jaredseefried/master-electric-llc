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
            <h3 id="footer-name"> Master Electric, LLC</h3>
            <p id="footer-description">
              Master Electric, LLC provides residential and commercial
              electrical solutions, serving the Denver Metro area.
            </p>
          </Col>
          <Col>
            <h3 id="footer-label">Contact</h3>
            <p id="footer-number">720-339-5614</p>
            <p id="footer-email">masterelectricllc@outlook.com</p>
          </Col>
          <Col id="footer-social-icons-container" className="float-end">
            <BsFacebook className="footer-social-icons" />
            <BsInstagram className="footer-social-icons" />
            <BsLinkedin className="footer-social-icons" />
            <BsYelp className="footer-social-icons" />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
