import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex mt-20">
        <div className="h-56 w-full bg-gray-300 absolute opacity-20"></div>
        <div className="flex ml-28 w-full tracking-wider text-center mt-12 ">
          <div>
            <span className="text-base font-semibold  ml-2 text-gray-700">
              Menu
            </span>
            <ul className="text-s absolute mt-4">
              <Link to="/Mens">
                {" "}
                <li className="mb-2 ">Mens</li>
              </Link>
              <Link to="/Kids">
                {" "}
                <li className="mb-2 ">Kids</li>
              </Link>
              <Link to="/Womens">
                {" "}
                <li className="mb-2 ">Women</li>
              </Link>
              <Link to="/Jewellery">
                {" "}
                <li className="mb-2 ">Jewellery</li>
              </Link>
            </ul>
          </div>
          <div className="ml-24">
            <span className="text-base font-semibold ml-2 text-gray-700">
              Support
            </span>
            <ul className="text-s mt-4">
              <li className="mb-3">About Us</li>
              <li className="mb-3">Privacy Policy</li>
              <li className="mb-3">Terms & Conditions</li>
            </ul>
          </div>
          <div className=" ml-24">
            <span className="text-base font-semibold  text-gray-700">
              Contact Us
            </span>
            <ul className=" text-s mt-4">
              <li className="flex h-4 mb-4  ">
                <img src="insta.png" /> @fashiononrent
              </li>
              <li className="flex mb-4 h-4">
                <img src="fb.png" /> @fashiononrent
              </li>
              <li className="flex h-4 mb-3 ">
                <img src="twit.png" /> @fashiononrent
              </li>
            </ul>
          </div>
        </div>
        <Link to="/">
          <img
            src="logo2.png"
            className="absolute left-3/4 w-40 h-24 mt-20 ml-8     "
          />
        </Link>
      </div>
      <div className="text-s text-center mt-5">Fashion On Rent &copy; 2021</div>
    </>
  );
};
export default Footer;
