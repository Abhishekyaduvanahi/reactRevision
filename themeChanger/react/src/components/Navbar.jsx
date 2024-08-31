import React from "react";
import { CiHome } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className=" w-full   flex justify-between items-center bg-slate-400  px-4 py-2 hover:bg-slate-300 cursor-pointer md:w-full">
        {/* Logo and Title */}
        <div className="flex flex-wrap items-center gap-0 hover:bg-yellow-400 rounded-xl ">
          <CiHome className="text-2xl" />
          <div className="font-bold text-lg">hatcoder</div>
        </div>

        <div>
          <input
            className="rounded-2xl w-[195px] p-[5px]"
            type="text"
            placeholder="Search bro ! Search "
          />
        </div>

        {/* Links */}
        <div className="flex">
          <ul className="flex gap-10">
            <li className="hover:bg-white p-1 rounded-xl duration-200 cursor-pointer">
              Home
            </li>
            <li className="hover:bg-white p-1 rounded-xl duration-200 cursor-pointer">
              About
            </li>
            <li className="hover:bg-white p-1 rounded-xl duration-200 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Login/Signup */}
        <div className=" flex text-right">
          <button className="bg-orange-400 rounded-xl p-[4px] hover:bg-orange-300 hover:font-semibold">
            Login
          </button>
          <button className="bg-orange-400 rounded-xl p-[4px] hover:bg-orange-300 hover:font-semibold ml-1">
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
