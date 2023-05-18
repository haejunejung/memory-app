import React from "react";
import ReactPlayer from "react-player";

const Video = (props) => {
  const theater = parseInt(props.index) + 1;

  return (
    <div className="video-wrapper">
      <ReactPlayer
        url={process.env.PUBLIC_URL + `/videos/video${theater}.mp4`}
        width="15rem"
        height="15rem"
        playing={true}
        loop={true}
      ></ReactPlayer>
    </div>
  );
};

export default Video;
