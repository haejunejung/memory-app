import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
