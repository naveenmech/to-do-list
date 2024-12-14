import React from "react";
import Main from "../MainComponent/main";

const Navbar = () => {
  return (
    <>
      <div className="py-6 bg-[#000000] mt-4 mx-4 rounded-xl">
        <div className=" text-white flex items-center justify-center">
          TO DO LIST
        </div>
      </div>
      <Main />
    </>
  );
};

export default Navbar;
