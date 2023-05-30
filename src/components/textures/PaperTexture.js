import React from "react";

const PaperSVG = () => (
  <svg>
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
  </svg>
);

export default PaperSVG;
