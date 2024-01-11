import React from "react";
import Image from "react-bootstrap/Image";
import MainImage from "../../images/main.png";

export default function Banner() {
  return (
    <>
      <Image src={MainImage} fluid />;
    </>
  );
}
