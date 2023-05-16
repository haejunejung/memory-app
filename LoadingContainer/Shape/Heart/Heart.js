import React, { useEffect, useRef } from "react";
import mojs from "@mojs/core";

/* ADD CUSTOM SHAPE SOMEWHERE IN YOUR CODE */
class HeartShape extends mojs.CustomShape {
  getShape() {
    return '<path d="M92.6 7.4c-10-9.9-26-9.9-35.9 0l-4.4 4.3a3.4 3.4 0 0 1-4.7 0l-4.3-4.3c-10-9.9-26-9.9-35.9 0a25 25 0 0 0 0 35.5l22.4 22.2 13.5 13.4a9.5 9.5 0 0 0 13.4 0L70.2 65 92.6 43a25 25 0 0 0 0-35.5z"/>';
  }
  getLength() {
    return 200;
  } // optional
}
mojs.addShape("heart", HeartShape); // passing name and Bubble class

const Heart = () => {
  const heart = useRef();

  useEffect(() => {
    if (heart.current) return;

    heart.current = new mojs.Shape({
      shape: "heart",
      fill: "red",
      stroke: "red",
      scale: { 0: 1 },
      strokeWidth: { 50: 0 },
      y: -20,
      duration: 3500,
    });

    heart.current.play();
  });

  return <></>;
};

export default Heart;
