import React from "react";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="app">
      <svg
        className="background-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <filter id="papertexture">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            result="noise"
            numOctaves="5"
          />

          <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2">
            <feDistantLight azimuth="270" elevation="60" />
          </feDiffuseLighting>
        </filter>
        <rect width="100%" height="100%" filter="url(#papertexture)" />
      </svg>
      <MainContainer />
    </div>
  );
}

export default App;
