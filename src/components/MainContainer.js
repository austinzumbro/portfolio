import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    console.log(currentPage);
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <Contact />;
    }
  };

  return (
    <div className="">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="flex items-center justify-center">{renderPage()}</div>
      <Footer />
    </div>
  );
}
