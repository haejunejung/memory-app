import React from "react";
import Cinema from "./Cinema/Cinema";

const CinemaContainer = (props) => {
  return (
    <>
      <Cinema index={props.index} />
    </>
  );
};

export default CinemaContainer;
