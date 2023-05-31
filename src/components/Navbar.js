import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="w-screen px-5 grid grid-cols-2 md:grid-cols-4 gap-5">
      <li className="flex">
        <a
          className={
            currentPage === "About"
              ? "w-full px-5 py-3 text-center rounded bg-violet-700 hover:bg-violet-600 focus:outline-none ring ring-violet-300 text-violet-100 font-bold uppercase"
              : "w-full px-5 py-3 text-center rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-violet-100 font-bold uppercase"
          }
          href="#about-me"
          onClick={() => handlePageChange("About")}
        >
          About Me
        </a>
      </li>
      <li className="flex">
        <a
          className="w-full px-5 py-3 text-center rounded bg-amber-500 hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-400 text-amber-100 font-bold uppercase"
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </a>
      </li>
      <li className="flex">
        <a
          className="w-full text-center px-5 py-3 w-100 rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 text-blue-100 font-bold uppercase"
          href="#contact"
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </a>
      </li>
      <li className="flex">
        <a
          className="w-full text-center px-5 py-3 rounded bg-lime-600 hover:bg-lime-700 active:bg-lime-800 focus:outline-none focus:ring focus:ring-lime-500 text-lime-100 font-bold uppercase"
          href="#resume"
          onClick={() => handlePageChange("Resume")}
        >
          Résumé
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
