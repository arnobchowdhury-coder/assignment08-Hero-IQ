import React from 'react';
import logo from "../../assets/logo.png"
import { FaGithub } from 'react-icons/fa';


const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-11/12 mx-auto py-4 px-6 bg-white shadow-sm rounded-lg">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt=""
          className="w-8 h-8"
        />
        <h1 className="text-lg font-bold text-purple-700">HERO.IO</h1>
      </div>
      <div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="text-purple-600 cursor-pointer hover:text-purple-700">
            Home
          </li>
          <li className="cursor-pointer hover:text-purple-700">Apps</li>
          <li className="cursor-pointer hover:text-purple-700">Installation</li>
        </ul>
      </div>
      <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition">
        <FaGithub className="text-lg" />
        Contribute
      </button>
    </nav>
  );
};

export default NavBar;