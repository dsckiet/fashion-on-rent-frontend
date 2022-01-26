import React from "react";
import { BiUserCircle, BiPlusCircle } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { ImLocation } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className=" flex py-2 bg-blue-light">
        <div className="ml-8 mt-0.25 ">
         <Link to = "/"> <img src="logo2.png" className="w-24 h-14" /></Link>
        </div>
        <div className="ml-6 flex ">
          <GoSearch className=" mt-4 w-8 h-6 ml-2 absolute pl-3" />
          <input
            type="search"
            placeholder="Search for items, shops and more"
            className=" mt-2.5 text-small px-4 ml-2 pl-10 w-80 h-9 rounded-3xl focus:outline-none"
          />
        </div>
        <div className="ml-64 flex ">
          <GoSearch className=" mt-4 pt-1 w-6 h-5 ml-2 absolute pl-1" />
          <input
            type="search"
            placeholder="Enter your location"
            className=" mt-2.5 text-small  ml-1 pl-9 w-52 text-sm h-9 rounded-3xl focus:outline-none"
          />
          <ImLocation className="mt-3.5 pt-1  w-6 h-5 ml-44 absolute " />
        </div>
        <Link to="/Ad">
          <div className="mt-2.5 w-16 ml-6 ">
            <BiPlusCircle className="mt-1.5 w-9 h-6  ml-0.5 absolute" />
            <button className="text-lg pt-1 tracking-wide font-semibold text-gray-700 pl-9 w-24 h-9 rounded-3xl flex bg-red-light focus:outline-none">
              Rent
            </button>
          </div>
        </Link>
        <Link to="/Signin">
          <div className="ml-12 mt-2 ">
            <BiUserCircle className=" pt-1 w-8 h-9 absolute " />
            <button className=" text-base pt-1.5  font-semibold text-gray-700 pl-9  h-9 ">
              Login / Sign Up
            </button>
          </div>
        </Link>
      </div>
      <div className="flex items-center  justify-center h-8">
        <div className="bg-gray-400 absolute w-full h-8 opacity-10"></div>
            <ul className="flex absolute space-x-6 text-sm">
              <li>
              
              <Link to = "/" > All Categories
              </Link>
              </li>
              <Link to="/mens">
              <li>
               Men 
              </li>
              </Link>
              <li>
                <Link to="/womens">Women </Link>
              </li>
              <li>
                <Link to="/kids">Kids </Link>
              </li>
              <li>
                <Link to="/jewellery">Jewellery </Link>
              </li>
            </ul>
      </div>
    </>
  );
}
