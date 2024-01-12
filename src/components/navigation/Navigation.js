import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import MasterElectricLogo from "../../images/Master-Electric-LLC.png";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <Navbar className="bg-body-tertiary shadow bg-body-tertiary rounded">
        <Container className="nav-continer">
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center home-link"
          >
            <img
              alt="Master Electric LLC Logo"
              src={MasterElectricLogo}
              width="80"
              className="d-inline-block align-top"
            />{" "}
            Master Electric, LLC
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
