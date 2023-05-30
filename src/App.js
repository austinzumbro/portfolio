import React from "react";
import MainContainer from "./components/MainContainer";
import PaperTexture from "./components/textures/PaperTexture";

function App() {
  return (
    <div className="app">
      <div
        className="background"
        style={{ filter: "url(#papertexture)" }}
      ></div>
      <PaperTexture />
      <MainContainer />
    </div>
  );
}

export default App;
