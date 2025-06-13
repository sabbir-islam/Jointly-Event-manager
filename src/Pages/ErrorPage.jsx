import React from "react";
import errorImg from "../assets/3828537.jpg";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  mb-8">
        <img className="w-[800px] h-[650px]" src={errorImg} alt="" />
        <h1 className="text-4xl font-extrabold text-red-400">
          404 - Page Not Found
        </h1>
        <p className="text-lg font-semibold mt-4">
          Oops! The page you looking for doesn't exist.
        </p>
        <Link to={"/"}>
          <button className="btn bg-[rgb(14,161,6)] rounded-2xl text-white mt-4">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
