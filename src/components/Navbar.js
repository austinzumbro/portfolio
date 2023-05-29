import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="flex-1 navbar">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-5">
          <li>
            <a
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-violet-100 font-bold uppercase me-5"
              href="#about-me"
              onClick={() => handlePageChange("About")}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-400 text-amber-100 font-bold uppercase me-5"
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 text-blue-100 font-bold uppercase me-5"
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="bg-lime-600 hover:bg-lime-700 active:bg-lime-800 focus:outline-none focus:ring focus:ring-lime-500 text-lime-100 font-bold uppercase me-5"
              href="#resume"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
