import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import { Link } from "react-router-dom";
const Ad = () => {
  const [select, setSelect] = useState(0);

  return (
    <>
    <Header/>
    <div className="mb-10">
      <img src="working.png" alt="working" className="max-h-64 max-w-full" />
      <h5 className="text-center pt-10 text-3xl tracking-wide">
        Choose Category of Item
      </h5>
      <div className="border border-1 rounded-xl w-1/2 ml-80 mt-12 h-2/5 ">
        <div className="text-3xl flex">
          <div className="w-1/2 text-center ">
            <div className="py-8  text-right mr-2 px-4">
              <p>
                Clothes
                <button
                  onClick={() => setSelect(1)}
                  className=" font-bold pl-16">
                  &nbsp;>
                </button>
              </p>
            </div>
            <hr />
            <div className="h-24 p-4 text-center pt-8">
              <p>
                Apparel (Jwellery)
                <span
                  className="font-bold pl-4 cursor-pointer"
                  onClick={() => setSelect(2)}>
                  >
                </span>
              </p>
            </div>
          </div>
          {select === 0 && (
            <div className="bg-gray-200 w-1/2 border-l-2 rounded-r-xl flex justify-center items-center">
              <div className="text-center bg-gray-300 rounded-2xl w-32 h-5 ">
                <p className="text-sm ">select a category</p>
              </div>
            </div>
          )}

          {select === 1 && (
            <div className=" bg-gray-100  border-l-2 rounded-r-xl py-1  text-xl tracking-wide flex flex-col text-center items-center">
             
             <Link to ="/Form">
              <div className="bg-red-light w-80 mt-2 py-2 ">Mens Fashion</div>
              <div className="bg-red-light w-80 mt-1 py-2 ">Womens Fashion</div>
              <div className="bg-red-light w-80 mt-1 py-2 ">Kids Fashion</div>
              </Link>
            </div>
          )}

          {select === 2 && (
            <div className="  border-l-2 rounded-r-xl py-16  bg-gray-100 text-xl tracking-wide flex flex-col text-center items-center">
             <Link to ="/Form">
            
              <div className="bg-red-light w-80 mt-2 py-3 ">Jewellery</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
};
export default Ad;
