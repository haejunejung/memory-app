import React, { useEffect, useState } from "react";

import Isometrizer, {
  ISO_HORIZONTAL,
  ISO_RIGHT,
  ISO_VERTICAL,
} from "isometrizer";

import { useRecoilState } from "recoil";

import Video from "../Video/Video";

import "./Cinema.css";
import { theaterState } from "../../../recoil/state";
import Picture from "../Picture/Picture";

const Cinema = () => {
  const [isStart, setIsStart] = useState(false);
  const [theater, setTheater] = useRecoilState(theaterState);

  useEffect(() => {
    const element = document.getElementById("movie-bottom");

    const iso = new Isometrizer(element, {
      spacing: 0,
      orientation: ISO_HORIZONTAL | ISO_RIGHT,
    });

    iso.progress({});

    iso.on();
  }, []);

  useEffect(() => {
    const element = document.getElementById("movie-right");

    const iso = new Isometrizer(element, {
      spacing: 0,
      orientation: ISO_VERTICAL | ISO_RIGHT,
    });

    iso.on();
  }, []);

  const handleStart = () => {
    setIsStart(!isStart);
  };

  const handlePage = () => {
    setTheater(0);
  };

  return (
    <>
      <div className="iso-wrapper">
        <div id="isometrizer">
          <section id="movie-bottom">{isStart && <Video />}</section>
          <section id="movie-right">{isStart && <Video />}</section>
        </div>
        <div className="pictures-wrapper">
          <Picture index={1} imageIndex={theater} />
          <Picture index={2} imageIndex={theater + 8} />
          <Picture index={3} imageIndex={theater + 16} />
          <Picture index={4} imageIndex={theater + 24} />
        </div>

        <div className="btn-wrapper">
          <button onClick={handlePage} className="prev-button">
            prev
          </button>
          <button onClick={handleStart} className="trap-button">
            Start!
          </button>
        </div>
      </div>
    </>
  );
};

export default Cinema;
