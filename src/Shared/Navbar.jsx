import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/Logo.jpg";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
// import { Links } from "react-router-dom";
import ScrollLink from "../Hook/ScrollLink";

const Navbar = () => {
  const links = (
    <>
      <li className="md:mx-4 hover:border-b-3 font-semibold hover:border-[#749b3f]">
        {/* <ScrollLink></ScrollLink> */}
        <ScrollLink to={"home"}>Home</ScrollLink>
      </li>
      <li className="md:mx-4 hover:border-b-3 font-semibold hover:border-[#749b3f]">
        <ScrollLink to={"shop"}>Shop</ScrollLink>
      </li>
      <li className="md:mx-4 hover:border-b-3 font-semibold hover:border-[#749b3f]">
        <ScrollLink to={"about"}>About</ScrollLink>
      </li>
      <li className="md:mx-4 hover:border-b-3 font-semibold hover:border-[#749b3f]">
        <ScrollLink to={"blog"}>Blog</ScrollLink>
      </li>
    </>
  );

  return (
    <div className="navbar flex-row-reverse md:flex-row bg-transparent ">
      <div className="navbar md:navbar-start justify-between  ">
        <img className="max-w-52" src={logo}></img>
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn p-0 btn-ghost md:hidden"
          >
            <button className="flex mr-1 items-center text-white gap-1 justify-center">
              <IoCart className="text-2xl" /> Cart
            </button>
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
            tabIndex={0}
            className="menu right-1 items-center menu-sm dropdown-content border-1  bg-transparent rounded-box z-1 mt-2   p-2  shadow-xl"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center  hidden md:flex">
        <ul className="menu menu-horizontal  px-1">{links}</ul>
      </div>
      <div className=" hidden md:navbar-end gap-5 ">
        <button className="hidden md:flex items-center gap-1 justify-center text-white">
          <FaHeart className="text-xl" /> Favorites
        </button>
        <button className="flex items-center text-white gap-1 justify-center">
          <IoCart className="text-xl" /> Cart
        </button>
        <a className="btn bg-[#749b3f] lg:p-5 text-white shadow-none">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Navbar;
