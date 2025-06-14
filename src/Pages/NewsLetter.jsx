import Lottie from "lottie-react";
import React from "react";
import animation from "../assets/News.json";
const NewsLetter = () => {
  return (
    <div className="md:w-[80%] mx-auto bg-5 py-20 rounded-xl">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div>
          <h1 className="text-4xl text-center md:text-start">
            Never Miss an Event or Update
          </h1>
          <p className="text-xl text-center md:text-start mt-4">
            Subscribe to receive updates on local events, new features, and
            community highlights
          </p>
          <div className="mt-6 flex justify-center items-center">
            <form className="fieldset" action="">
              <input type="email" className="input" placeholder="Email" />
            </form>
            <button className="btn bg-amber-500">Subscribe</button>
          </div>
        </div>
        <div className="w-[300px] md:w-[600px] h-[400px]">
          <Lottie animationData={animation} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
