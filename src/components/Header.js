import React from "react";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <div className="flex justify-center content-center items-center">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center mt-7 mb-20">
        <h1 className="text-4xl font-serif font-extrabold text-zinc-700 m-5 px-10">
          Austin Zumbro
        </h1>
        <div className="m-5 px-10">
          <Navbar
            currentPage={props.currentPage}
            handlePageChange={props.handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
