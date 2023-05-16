import React from "react";
import Heart from "./Heart/Heart";

const Shape = (props) => {
  if (props.shape === "heart") {
    return <Heart />;
  }

  return <></>;
};

export default Shape;
