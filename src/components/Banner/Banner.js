import React from "react";
import Image from "react-bootstrap/Image";
import MainImage from "../../images/main1.jpg";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner-container shadow  rounded">
      <Image
        src={MainImage}
        alt="Custom LED lights and Lighting Control in liquor distrobution warehouse"
        title="Custom LED lights and Lighting Control"
        className="banner-image"
        fluid
      />
      <div class="banner-overlay"></div>
      <div class="text-overlay">Illuminating Your World</div>
    </div>
  );
}
