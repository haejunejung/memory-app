import React from "react";

import Card from "./Card/Card";

import "./MainContainer.css";

const MainContainer = () => {
  return (
    <section className="hero-section">
      <div className="card-grid">
        <Card index={1} />
        <Card index={2} />
        <Card index={3} />
        <Card index={4} />
        <Card index={5} />
        <Card index={6} />
        <Card index={7} />
        <Card index={8} />
      </div>
    </section>
  );
};

export default MainContainer;
