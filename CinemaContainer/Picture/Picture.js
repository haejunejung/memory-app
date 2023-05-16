import React, { useEffect } from "react";

import Isometrizer, { ISO_LEFT, ISO_RIGHT, ISO_VERTICAL } from "isometrizer";

import "./Picture.css";

const Picture = (props) => {
  const source =
    process.env.PUBLIC_URL + `/pictures/picture${props.imageIndex}.jpeg`;

  useEffect(() => {
    const element = document.getElementById("image1");

    const iso = new Isometrizer(element, {
      spacing: 0,
      orientation: ISO_VERTICAL | ISO_RIGHT,
    });

    iso.on();
  }, []);

  useEffect(() => {
    const element = document.getElementById("image2");

    if (element) {
      const iso = new Isometrizer(element, {
        spacing: 0,
        orientation: ISO_VERTICAL | ISO_LEFT,
      });

      iso.on();
    }
  }, []);

  useEffect(() => {
    const element = document.getElementById("image3");

    if (element) {
      const iso = new Isometrizer(element, {
        spacing: 0,
        orientation: ISO_VERTICAL | ISO_LEFT,
      });

      iso.on();
    }
  }, []);

  useEffect(() => {
    const element = document.getElementById("image4");

    if (element) {
      const iso = new Isometrizer(element, {
        spacing: 0,
        orientation: ISO_VERTICAL | ISO_RIGHT,
      });

      iso.on();
    }
  }, []);

  return (
    <div>
      <img
        className="image"
        id={`image${props.index}`}
        alt="img"
        src={source}
      />
    </div>
  );
};

export default Picture;
