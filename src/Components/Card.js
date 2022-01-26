import React from "react";
import { Link } from "react-router-dom";


const Card = () => {
  return (
      <>
    <Link to = "/Logtoview">
    <div className="flex align-center justify-item-center w-44 h-auto">
      <div className=" shadow-lg rounded-lg mt-16 h-auto hover:shadow-2xl bg-img">
        <div className=" rounded-lg bg-gradient-to-tr from-gray-200 to gray-100 bg-cover">
          <img src="gro.png" alt="groom" />
        </div>
        <div className="text-center mt-2 min-h-full">
          <p className="font-semi-bold text-s">Cream Embroided Sherwani</p>
          <p className="font-semi-bold text-med">Ananda's Closet</p>
          <p className="font-semi-bold text-med pb-3">Rent: ₹5200</p>
        </div>
      </div>
    </div>
    </Link>

    </>
  );
};

export default Card;
