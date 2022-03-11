import React, { useState } from "react";
import "./style.css";
// import image from "../Image/b.PNG"
// import logo from "../Image/logo.PNG"
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import Header from "../Header";
import Footer from "../footer";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    repass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Header/>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-red-400 via-red-300 to-red-200 appearance-none	 box-border">
        <div className="bg-white rounded-bl-2xl rounded-tl-2xl">
          <img
            src="sign.png"
            alt="abc"
            className="image max-h-full w-96 rounded-bl-2xl rounded-tl-2xl shadow-2xl"
          />
        </div>

        <div className="bg-white-light rounded-br-2xl rounded-tr-2xl w-96 shadow-2xl box pt-4 ">
          <h2 className="mt-6 text-center text-2xl text-gray-900 font-semibold mb-6 p-1 tracking-wider">
            Sign Up
          </h2>
          <div className="w-3/5 relative  mx-24 mt-5 google">
            <a
              className="target-blank"
              href="https://accounts.google.com/ServiceLogin/signinchooser?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
              <div className="flex flex-row">
                <div className="bg-dark-red z-10 h-4 w-7">
                  <img src="goo.png" alt="pic" className="z-10 " />
                </div>
                <div>
                  <input
                    name=""
                    type=""
                    value="LOGIN WITH GOOGLE"
                    placeholder="LOGIN WITH GOOGLE"
                    className="cursor-pointer -mx-6 bg-red-dark appearance-none rounded-2xl relative block tracking-wide px-8 mb-4 py-1.5 border border-none placeholder-gray-500 text-white-light focus:outline-none focus:z-8 text-xs"
                  />
                </div>
              </div>
            </a>
          </div>

          <div className="flex justify-between items-center mb-5">
            <hr className="w-24 ml-auto border-gray-light" />{" "}
            <span className="p-2 text-gray-440 text-xs">or</span>
            <hr className="w-24 mr-auto border-gray-light" />
          </div>
          <form
            className="h-auto"
            action="#"
            method="POST"
            onSubmit={handleSubmit}>
            <div class="w-3/5 mx-auto">
              <div class="flex items-center  mt-4 mb-4">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <div className="ml-4 z-10 opacity-50">
                  <FaUserCircle />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                  placeholder="Name*"
                  className=" -mx-6 tracking-wider  bg-red-light hover:bg-red-200 appearance-none rounded-2xl relative block px-9 py-1 placeholder-gray-400 text-gray-light focus:outline-none focus:bg-red-200 text-xs"
                />
              </div>
            </div>

            <div class="w-3/5 mx-auto">
              <div class="flex items-center mb-4 ">
                <label htmlFor="name" className="sr-only">
                  Username
                </label>
                <div className="ml-4 z-10 opacity-50">
                  <FaUserCircle />
                </div>
                <input
                  id="Username"
                  name="username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  required
                  placeholder="Username*"
                  className=" -mx-6 bg-red-light tracking-wider hover:bg-red-200 appearance-none rounded-2xl relative block px-9 py-1 placeholder-gray-400 text-gray-light focus:outline-none focus:bg-red-200 text-xs"
                />
              </div>
            </div>

            <div class="w-3/5 mx-auto">
              <div class="flex items-center mb-4">
                <label htmlFor="name" className="sr-only">
                  Email
                </label>
                <div className="ml-4 z-10 opacity-50">
                  <GrMail />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email (Optional)"
                  className=" -mx-6 bg-red-light tracking-wider hover:bg-red-200 appearance-none rounded-2xl relative block px-9 py-1 placeholder-gray-400 text-gray-light focus:outline-none focus:bg-red-200 text-xs"
                />
              </div>
            </div>

            <div class="w-3/5 mx-auto">
              <div class="flex items-center mb-4">
                <label htmlFor="name" className="sr-only">
                  Phone Number
                </label>
                <div className="ml-4 z-10 opacity-50">
                  <IoIosCall />
                </div>
                <input
                  id="Phone number"
                  name="phone"
                  type="number"
                  value={values.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number*"
                  className=" -mx-6 bg-red-light tracking-wider appearance-none hover:bg-red-200 appearance-none rounded-2xl relative block px-9 py-1 placeholder-gray-400 text-gray-light focus:outline-none focus:bg-red-200 text-xs"
                />
              </div>
            </div>

            <div class="w-3/5 mx-auto">
              <div class="flex items-center mb-4">
                <label htmlFor="name" className="sr-only">
                  password
                </label>
                <div className="ml-4 z-10 opacity-50">
                  <RiLock2Fill />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  required
                  placeholder="Password*"
                  className=" -mx-6 bg-red-light tracking-wider hover:bg-red-200 appearance-none rounded-2xl relative block px-9 py-1 placeholder-gray-400 text-gray-light focus:outline-none focus:bg-red-200 text-xs"
                />
              </div>
            </div>
            <div class="w-3/5 mx-auto">
              <div class="flex items-center mb-4">
                <label htmlFor="name" className="sr-only">
                  Confirm Password
                </label>
                <div className="ml-4 z-10 opacity-50">
                  <RiLock2Fill />
                </div>
                <input
                  id="repass"
                  name="repass"
                  type="password"
                  value={values.repass}
                  onChange={handleChange}
                  required
                  placeholder="Confirm Password*"
                  className=" -mx-6 bg-red-light tracking-wider hover:bg-red-200 appearance-none rounded-2xl relative block px-9 py-1 placeholder-gray-400 text-gray-light focus:outline-none focus:bg-red-200 text-xs"
                />
              </div>
            </div>

            <div className="mb-10 mt-8">
              <button
                type="submit"
                className="bg-blue-light hover:bg-blue-b_light m-auto group relative flex tracking-wider justify-center py-1.5 mb-8 px-14 border border-transparent text-sm font-semibold rounded-2xl text-red-600 focus:outline-none ">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Signup;
