import React from "react";

import "./Card.css";

const Card = (props) => {
  const bcolor = [
    "#FF5A5A",
    "#FFAA28",
    "#FFE650",
    "#96F56E",
    "	#00D7FF",
    "#3296D7",
    "#be32be",
    "#000000",
  ];

  const style = {
    backgroundColor: bcolor[props.index],
  };

  return (
    <>
      <div class="outer-scratch">
        <div class="inner-scratch">
          <div class="background grain"></div>
        </div>
      </div>
      <div class="outer-scratch">
        <div class="inner-scratch">
          <div class="background grain"></div>
        </div>
      </div>
      <section className="card-wrapper">
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content" style={style}>
                <strong className="text-animation">
                  GIFT {parseInt(props.index) + 1}
                </strong>
              </div>
            </div>
            <div class="front">
              <div class="img">
                <div class="circle"></div>
                <div class="circle" id="right"></div>
                <div class="circle" id="bottom"></div>
              </div>

              <div class="front-content">
                <small class="badge">
                  OUR MEMORY {parseInt(props.index) + 1}
                </small>
                <div class="description">
                  <div class="title">
                    <p class="title">
                      <strong>Spaguetti Bolognese</strong>
                    </p>
                  </div>
                  <p class="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
