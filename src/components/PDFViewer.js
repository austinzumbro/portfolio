import React from "react";
import resumePDF from "../assets/pdfs/austin-zumbro.pdf";
import { Document, pdfjs } from "react-pdf";

import { worker } from "pdfjs-dist/legacy/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerPort = worker;

const PDFViewer = () => {
  return (
    <div>
      <Document file={resumePDF} />
    </div>
  );
};

export default PDFViewer;
