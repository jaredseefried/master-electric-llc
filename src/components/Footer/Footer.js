import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsInstagram, BsLinkedin, BsYelp } from "react-icons/bs";
import "./Footer.css";

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
            <p id="footer-number">720-456-1384</p>
            <p id="footer-email">masterelectricllc@outlook.com</p>
          </Col>
          <Col className="col-12 col-md-4" id="footer-social-icons-container">
            <a class="footer-social-icon-a">
              <BsInstagram className="footer-social-icons" />
            </a>
            <a class="footer-social-icon-a">
              <BsLinkedin className="footer-social-icons" />
            </a>
            <a
              href="https://www.yelp.com/biz/master-electric-aurora-2"
              target="_blank"
              class="footer-social-icon-a"
            >
              <BsYelp className="footer-social-icons" />{" "}
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
