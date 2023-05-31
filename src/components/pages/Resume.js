import React from "react";
import resumePDF from "../../assets/pdfs/austin-zumbro.pdf";

export default function Resume() {
  return (
    <div className="flex flex-col items-center w-full m-5 lg:w-2/3">
      <div className="flex flex-row w-2/3 justify-between items-center mb-10">
        <h2 className="font-bold text-2xl">Resume</h2>
        <a
          href={resumePDF}
          download
          className="bg-lime-600 text-lime-100 px-5 py-3 font-bold rounded"
        >
          Download
        </a>
      </div>

      <embed
        src={resumePDF}
        type="application/pdf"
        width="100%"
        height="600px"
        className="z-10 w-full"
      />
    </div>
  );
}
