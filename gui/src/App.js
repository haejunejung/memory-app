import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import "./App.css";
import Start from "./components/Start/Start";
import Video from "./components/Video/Video";
import End from "./components/End/End";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <AwesomeSlider>
        <React.Fragment>
          <Start />
        </React.Fragment>
        <React.Fragment>
          <div>1</div>
          {/* <ReactPlayer
            url={process.env.PUBLIC_URL + `/videos/video1.mp4`}
            width="15rem"
            height="15rem"
            playing={true}
            loop={true}
          ></ReactPlayer> */}
          <Video index="0" />
        </React.Fragment>
        <React.Fragment>
          <Video index="1" />
        </React.Fragment>
        <React.Fragment>
          <Video index="2" />
        </React.Fragment>

        <React.Fragment>
          <Video index="3" />
        </React.Fragment>
        <React.Fragment>
          <Video index="4" />
        </React.Fragment>
        <React.Fragment>
          <Video index="5" />
        </React.Fragment>

        <React.Fragment>
          <Video index="6" />
        </React.Fragment>
        <React.Fragment>
          <Video index="7" />
        </React.Fragment>
        <React.Fragment>
          <End />
        </React.Fragment>
      </AwesomeSlider>
    </div>
  );
}

export default App;
