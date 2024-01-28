import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import MasterElectricLogo from "../../images/Master-Electric-LLC.png";
import "./Navigation.css";
import { BsFacebook, BsYelp, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="main-nav" id="main-nav">
        <Container className="nav-continer">
          <Nav href="#home" className="d-flex align-items-center home-link">
            <img
              alt="Master Electric LLC Logo"
              src={MasterElectricLogo}
              className="d-inline-block align-top ma-logo"
            />{" "}
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#main-header-line" className="hp-link">
                Services
              </Nav.Link>
              <Nav.Link href="#lighting-list-container" className="hp-link">
                Solutions
              </Nav.Link>
              <Nav.Link href="#review-section" className="hp-link">
                Reviews
              </Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Brand id="call-today">
                <strong>Call Today!</strong>
                <br /> 720-456-1384{" "}
              </Navbar.Brand>
            </Nav>
            <Nav className="social-icon-container1">
              <Nav.Link className="social-icon-container">
                <BsInstagram className="social-icons" />
              </Nav.Link>
              <Nav.Link className="social-icon-container">
                <BsLinkedin className="social-icons" />
              </Nav.Link>
              <Nav.Link
                className="social-icon-container"
                href="https://www.yelp.com/biz/master-electric-aurora-2"
                target="_blank"
              >
                <BsYelp className="social-icons" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
