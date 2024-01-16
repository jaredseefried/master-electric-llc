import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavDropdown } from "react-bootstrap";
import MasterElectricLogo from "../../images/Master-Electric-LLC.png";
import "./Navigation.css";
import ContactBanner from "../ContactBanner/ContactBanner";
import { BsFacebook, BsYelp, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="main-nav">
        <Container className="nav-continer">
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center home-link"
          >
            <img
              alt="Master Electric LLC Logo"
              src={MasterElectricLogo}
              className="d-inline-block align-top ma-logo"
            />{" "}
            Master Electric, LLC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="hp-link">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="hp-link">
                Link
              </Nav.Link>
              <Navbar.Brand id="call-today">
                Call Today!
                <br /> 720-339-5614{" "}
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text>
            <BsFacebook className="social-icons" />
          </Navbar.Text>
          <Navbar.Text>
            <BsInstagram className="social-icons" />
          </Navbar.Text>
          <Navbar.Text>
            <BsLinkedin className="social-icons" />
          </Navbar.Text>
          <Navbar.Text>
            <BsYelp className="social-icons" />
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}
