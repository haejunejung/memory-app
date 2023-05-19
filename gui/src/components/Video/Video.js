import React from "react";
import ReactPlayer from "react-player";

const Video = (props) => {
  const theater = parseInt(props.index) + 1;

  return (
    <ReactPlayer
      url={process.env.PUBLIC_URL + `/videos/video${theater}.mp4`}
      width="15rem"
      height="15rem"
      playing={true}
      loop={true}
    ></ReactPlayer>
  );
};

export default Video;
