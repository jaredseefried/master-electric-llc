import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import MasterElectricLogo from "../../images/Master-Electric-LLC.png";
import "./Navigation.css";
import ContactBanner from "../ContactBanner/ContactBanner";

export default function Navigation() {
  return (
    <>
      <Navbar className="shadow rounded main-nav">
        <Container className="nav-continer">
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center home-link fs-1"
          >
            <img
              alt="Master Electric LLC Logo"
              src={MasterElectricLogo}
              className="d-inline-block align-top ma-logo"
            />{" "}
            Master Electric, LLC
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
