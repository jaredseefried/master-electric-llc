import React from "react";
import Container from "react-bootstrap/Container";
import "../ContactBanner/ContactBanner.css";
import Card from "react-bootstrap/Card";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/instagram";
import "react-social-icons/yelp";

export default function ContactBanner() {
  return (
    <div className="contact-banner">
      <Card border="light" style={{ width: "32rem" }}>
        <Card.Body>
          <Card.Title>Call: 720-339-5614</Card.Title>
          <SocialIcon url="www.facebook.com" />
          <SocialIcon url="www.instagram.com" />
          <SocialIcon url="www.yelp.com" />
        </Card.Body>
      </Card>
    </div>
  );
}
