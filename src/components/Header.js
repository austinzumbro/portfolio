import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="flex flex-row w-full justify-between items-center py-7">
      <div className="px-5">
        <a
          className="text-4xl font-serif font-extrabold text-zinc-700 ms-5 px-3"
          href="/"
        >
          Austin Zumbro
        </a>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
