import React from "react";
import Container from "react-bootstrap/Container";
import "../ContactBanner/ContactBanner.css";
import Card from "react-bootstrap/Card";
import { BsFacebook, BsYelp, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function ContactBanner() {
  return (
    <div className="contact-banner">
      <Card className="card-style" style={{ width: "32rem" }}>
        <Card.Header className="contact-card-header">
          Call: 720-339-5614
        </Card.Header>
        <Card.Body>
          <BsFacebook className="social-icons" />
          <BsInstagram className="social-icons" />
          <BsLinkedin className="social-icons" />
          <BsYelp className="social-icons" />
        </Card.Body>
      </Card>
    </div>
  );
}
