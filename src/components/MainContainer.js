import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  const [email, setEmail] = useState("");

  const handlePageChange = (page) => setCurrentPage(page);
  // Handler for input changes to the search form
  const handleInputChange = (e) => setEmail(e.target.value);

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
        return (
          <Contact
            email={email}
            setEmail={setEmail}
            handleInputChange={handleInputChange}
          />
        );
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="flex items-center justify-center">{renderPage()}</div>
      <Footer />
    </div>
  );
}
