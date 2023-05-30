import React from "react";
import resumePDF from "../assets/pdfs/austin-zumbro.pdf";

const PDFContainer = () => {
  return (
    <div>
      <embed
        src={resumePDF}
        type="application/pdf"
        width="100%"
        height="100%"
      />
      <a href={resumePDF} download>
        Download PDF
      </a>
    </div>
  );
};

export default PDFContainer;
