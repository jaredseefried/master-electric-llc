import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Solutions.css";
import { FaBolt } from "react-icons/fa6";
import { FaPlugCircleCheck } from "react-icons/fa6";

export default function Solutions() {
  return (
    <div className="lighting-list-container" id="lighting-list-container">
      <h1 className="lighting-solutions">
        <FaBolt id="bolt-icon" />
        Lighting Solutions:
      </h1>
      <Container>
        <Row>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Lighting Control System
            </p>
          </Col>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Panel Services
            </p>
          </Col>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Basement Remodels
            </p>
          </Col>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Kitchen and Bath{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Exterior and Garages
            </p>
          </Col>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Aluminum Wiring Rewire
            </p>
          </Col>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Breaker Installation
            </p>
          </Col>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Grounding Systems
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Surge Protection
            </p>
          </Col>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Smoke Detector Install
            </p>
          </Col>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              New Construction
            </p>
          </Col>
          <Col className="lighting-list-col col-12 col-md-3">
            <p className="lighting-list">
              <FaPlugCircleCheck className="circle-plug-icon" />
              Troubleshooting
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
