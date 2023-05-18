import React, { useState } from "react";
import { IsometricContainer, Isometric, IsometricCube } from "isometric-react";
import Video from "../Video/Video";
import "./Card.css";

const Card = (props) => {
  const [play, setPlay] = useState(false);

  const handleVideoPlay = () => {
    setPlay(!play);
  };

  return (
    <>
      <section className="card-wrapper">
        <div className="card">
          {play ? (
            <React.Fragment>
              <IsometricContainer>
                <Isometric>
                  <IsometricCube width={5} height={10} depth={5}>
                    {[...Array(6)].map((_, sideIndex) => (
                      <div key={sideIndex}>
                        {sideIndex === 2 && <Video index={props.index} />}
                        {sideIndex === 4 && <Video index={props.index} />}
                      </div>
                    ))}
                  </IsometricCube>
                </Isometric>
              </IsometricContainer>
            </React.Fragment>
          ) : (
            <button
              onClick={handleVideoPlay}
              className={`card${parseInt(props.index) + 1}`}
            ></button>
          )}
        </div>
      </section>
    </>
  );
};

export default Card;
