import React from "react";
import resumePDF from "../../assets/pdfs/austin-zumbro.pdf";

export default function Resume() {
  return (
    <div className="flex flex-col w-100">
      <div className="flex flex-row justify-between items-center">
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
      />
    </div>
  );
}
