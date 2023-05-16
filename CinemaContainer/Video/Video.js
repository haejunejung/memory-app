import React from "react";
import ReactPlayer from "react-player";
import { useRecoilValue } from "recoil";
import { theaterState } from "../../../recoil/state";

import "./Video.css";

const Video = (props) => {
  const theater = useRecoilValue(theaterState);

  return (
    <div className="video-wrapper">
      <ReactPlayer
        url={process.env.PUBLIC_URL + `/videos/video${theater}.mp4`}
        width="50vw"
        height="50vh"
        playing={true}
        loop={true}
      ></ReactPlayer>
    </div>
  );
};

export default Video;
