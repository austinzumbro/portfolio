import React from "react";
import PDFContainer from "../PDFContainer";
import resumePDF from "../../assets/pdfs/austin-zumbro.pdf";

export default function Resume() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <h2 className="font-bold text-2xl">Resume</h2>
        <a href={resumePDF} download className="bg-lime-600 px-5 py-3">
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
