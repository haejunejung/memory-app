import React from "react";

import { useRecoilState } from "recoil";

import { theaterState } from "../../../recoil/state";

import "./Card.css";

const Card = (props) => {
  const [, setTheater] = useRecoilState(theaterState);

  const handleTheater = () => {
    setTheater(props.index);
  };

  return (
    <button
      id={`card${props.index}`}
      onClick={handleTheater}
      className="card-wrapper"
    >
      <div className="card-background"></div>
      <div className="card-content">
        <p className="card-category">Gift {props.index}</p>
        <h3 className="card-heading">Click our Memory</h3>
      </div>
    </button>
  );
};

export default Card;
