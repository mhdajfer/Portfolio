import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-evenly items-center  text-white text-3xl top-0">
      <h2>MA</h2>
      <ul className="flex gap-10 text-sm">
        <li className="hover:underline cursor-pointer">Contact</li>
        <li className="hover:underline cursor-pointer">Projects</li>
        <li className="hover:underline cursor-pointer">Writes</li>
      </ul>
    </div>
  );
};

export default Navbar;
