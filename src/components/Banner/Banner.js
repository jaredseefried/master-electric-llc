import React from "react";
import Image from "react-bootstrap/Image";
import MainImage from "../../images/main.png";
import "./Banner.css"; // Import the CSS file for styling

export default function Banner() {
  return (
    <div className="banner-container shadow p-3 mb-5 bg-body-tertiary rounded">
      <Image src={MainImage} className="banner-image" fluid />
      <div class="banner-overlay"></div>
      <div class="text-overlay">Illuminating Your World</div>
    </div>
  );
}
