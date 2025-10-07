import React from "react";
import logo from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 border-b-[1px] border-[#e9e9e9] py-4 md:px-20 inter w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>Home</li>
            <li>Apps</li>
            <li>Installation</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src={logo} className="w-[40px] h-[40px]" alt="" />
          <h1 className="md:text-2xl text-[18px] font-bold inter text-nowrap text-[#632EE3]">
            HERO.IO
          </h1>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="hidden md:flex items-center justify-center gap-8 inter">
          <li className="cursor-pointer  hover:text-purple-700">Home</li>
          <li className="cursor-pointer  hover:text-purple-700">Apps</li>
          <li className="cursor-pointer hover:text-purple-700">Installation</li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="px-4 py-3 rounded-[4px] bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-semibold flex justify-between items-center gap-2.5">
          {" "}
          <FaGithub className="w-[20px] h-[20px]" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default NavBar;